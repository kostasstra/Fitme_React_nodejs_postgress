const bcrypt = require("bcryptjs");
const db = require("../models");
const jwt = require("jsonwebtoken");
const logger = require("../helpers/logging.helpers");
const { Users, RefreshTokens, Roles, Sequelize} = require("../models");
require("dotenv").config();

const Op = db.Sequelize.Op;

const jwt_secret = process.env.ACCESS_TOKEN_SECRET;
const jwt_expire_time = parseInt(process.env.ACCESS_TOKEN_LIFE);
const jwt_refresh_token_expire_time = parseInt(process.env.REFRESH_TOKEN_LIFE);

const createNewUser = async (userObject) => {
    try {
        const response = await Users.create({
            first_name: userObject.first_name,
            last_name: userObject.last_name,
            email: userObject.email,
            password: userObject.hashed_password,
        })
        return response
    } catch (error) {
        logger.log("ERROR",error) 
        return null;
    }
};

const getRoleNameById = async (role_id) => {
    try {
        const response = await Roles.findOne({ 
            attributes:["role_name"],
            where: {role_id: role_id}
        });
        if (response) {
            const role_name = await response.dataValues.role_name;
            return role_name;
        } else {
            return null;
        }
    } catch (error) {
        logger.log("ERROR",error) ;
        return null;
      }
};

const getUserByEmail = async (email) => {
    try {
        const response = await Users.findOne({ 
            where: {email: email}
        });
        if (response) {
            const user = await response.dataValues;
            return user;
        } else {
            return null;
        }
    } catch (error) {
        logger.log("ERROR",error) ;
        return null;
      }
};

const getUserByUserId = async (user_id) => {
    try {
        const response = await Users.findOne({ 
            where: {user_id: user_id}
        });
        if (response) {
            const user = await response.dataValues;
            return user;
        } else {
            return null;
        }
    } catch (error) {
        logger.log("ERROR",error) ;
        return null;
      }
};

const getRoleIdByRoleName = async (role) => {
    try {
        const response = await Roles.findOne({
            attributes:["role_id"], where: { role_name: { [Op.eq]: role}}
        });
        if (response) {
            const role_id = await response.dataValues.role_id;
            return role_id;
        } else {
            return null;
        }
    } catch (error) {
        logger.log("ERROR",error) ;
        return null;
    }
};

const getRefreshTokenbyUserId = async (user_id) => {
    try {
        const response = await RefreshTokens.findOne({
            attributes:["token"], where: { user_id: { [Op.eq]: user_id}}
        });
        if (response) {
            const token = await response.dataValues.token;
            return token;
        } else {
            return null;
        }
    } catch (error) {
        logger.log("ERROR",error) ;
        return null;
    }
};

const parseCookies = (request) => {
    const list = {};
    const cookieHeader = request.headers?.cookie;
    if (!cookieHeader) return list;
    cookieHeader.split(`;`).forEach(function(cookie) {
        let [ name, ...rest] = cookie.split(`=`);
        name = name?.trim();
        if (!name) return;
        const value = rest.join(`=`).trim();
        if (!value) return;
        list[name] = decodeURIComponent(value);
    });
    return list;
}

const setUserRole = async (user, role_id) => {
    try {
        const response = await user.update({role_id: role_id});
        if (response) {
            return true
        } else {
            return false
        }
    } catch (error) {
        logger.log("ERROR",error) ;
        return false;
    }
};

const userAuthenticate = async (user, provided_password) => {
    const output = {success:false, token:"", reason: ""}
    if (user) {
        const user_password = user.password;
        const is_password_valid = await bcrypt.compare(provided_password, user_password);
        if (is_password_valid) {
            const token = jwt.sign(
                { "user_id": user.user_id, }, 
                jwt_secret,
                { algorithm: "HS256", expiresIn: parseInt(jwt_expire_time) }
            );
            output.success = true;
            output.token = token;
        } else {
            output.reason = "Password not valid.";
        } 
    } else {
        output.reason = "No user object provided.";
    } 
    return output;
};

exports.register = async (req, res) => {
    const  { email, first_name, last_name, password, role } = req.body;
    const userObject = {};
    let error_message = "";
    let isRoleSet = false;
    let role_id = 1;

    if (role) { role_id = await getRoleIdByRoleName(role); };

    if (email && password && first_name && last_name) {
        const hashed_password = await bcrypt.hash(password, 10);
        userObject["email"] = email;
        userObject["first_name"] = first_name;
        userObject["last_name"] = last_name;
        userObject["hashed_password"] = hashed_password;

        const new_user = await createNewUser(userObject)
        if (new_user) {
            if (role && role_id != 2) {
                isRoleSet = await setUserRole(new_user, role_id)
            } else {
                isRoleSet = await setUserRole(new_user, 2)
            }
            if (!isRoleSet) {
                error_message = "Error while setting role.";
                logger.log("ERROR",error_message) ;
                res.status(500).json({error: error_message});
                return;
            }
            res.status(201).json({message: "Success"});
            return;
        } else {
            error_message = "Unexpected error during user creation.";
            logger.log("ERROR",error_message) ;
            res.status(500).json({error: error_message});
            return;
        } 
    } else if (! password || ! first_name || ! last_name || ! email) {
        error_message = "Registration failed. Not all information were provided";
        logger.log("ERROR",error_message) ;
        res.status(422).json({ error: error_message });
        return;
    } else {
        error_message = "Unexpected error during registration";
        logger.log("ERROR",error_message) ;
        res.status(500).json({error: error_message});
        return;
    }
};

exports.login = async (req, res) => {
    let error_message = ""
    const provided_email = req.body.email;
    const provided_password = req.body.password;

    const user = await getUserByEmail(provided_email);
    if (user) {
        const authObject = await userAuthenticate(user, provided_password);
        if (authObject.success) {
            const role_name = await getRoleNameById(user.role_id);
            if (role_name) {
                let refreshToken = await RefreshTokens.createToken(user);
                if (refreshToken) {
                    let expiresAt = new Date();
                    expiresAt.setSeconds(expiresAt.getSeconds() + jwt_refresh_token_expire_time);
                    // TODO: Remember to set "secure: true" for the cookie when go prod.
                    res.cookie(
                        "refreshToken", refreshToken, 
                        { httpOnly: true, expires: expiresAt, sameSite: "strict" }
                    );
                    res.status(200).json({ 
                        accessToken: authObject.token, 
                        email: user.email,
                        user: user.user_id,
                        role_id: "ROLE_" + role_name.toUpperCase()
                    });
                    return;
                } else {
                    error_message = "Conflict in request";
                    logger.log("ERROR",error_message) ;
                    res.status(409).json({ error: error_message });
                    return;
                }
            } else {
                error_message = "Conflict in request";
                logger.log("ERROR",error_message) ;
                res.status(409).json({ error: error_message });
                return;
            }  
        } else {
            error_message = "Password of User Incorrect";
            logger.log("ERROR",error_message) ;
            res.status(404).json({ error: error_message });
            return;
        }
    } else {
        error_message = "Password of User Incorrect";
        logger.log("ERROR",error_message) ;
        res.status(404).json({ error: error_message });
        return;
    };
};

exports.refreshToken = async (req, res) => {
    let error = ""
    const cookiesList = parseCookies(req);
    const requestToken = cookiesList.refreshToken;
    if (requestToken == null) {
        error = "Refresh Token is required!";
        logger.log("ERROR",error) ;
        return res.status(403).json({ error: error });
    }
    try {
        // TODO: Make the query with primarily user_id column, which must be indexed.
        let refreshToken = await RefreshTokens.findOne({ where: { token: requestToken } });
        if (!refreshToken) {
            error = "Refresh token is not in database!";
            logger.log("ERROR",error) ;
            res.status(403).json({ error: error });
            return;
        }
        const user_id = refreshToken.user_id;
        const isTokenExpired = await RefreshTokens.verifyExpiration(refreshToken);
        if (isTokenExpired) {
            error = "Refresh token was expired. Please make a new signin request";
            logger.log("ERROR",error) ;
            RefreshTokens.destroy({ where: { user_id: user_id } });
            res.status(403).json({ error: error});
            return;
        }
        const userExists = await getRefreshTokenbyUserId(user_id);
        const user = await getUserByUserId(user_id);
        if (userExists && user) {
            let newAccessToken = jwt.sign(
                { id: user_id }, 
                jwt_secret, 
                { expiresIn: jwt_expire_time },
            );
            await RefreshTokens.destroy({ where: { user_id: user_id } });
            const refreshToken = await RefreshTokens.createToken(user);
            let expiresAt = new Date();
            expiresAt.setSeconds(expiresAt.getSeconds() + jwt_refresh_token_expire_time);
            res.cookie(
                "refreshToken", refreshToken, 
                { httpOnly: true, expires: expiresAt, sameSite: "strict" }
            );
            res.status(200).json({accessToken: newAccessToken});
            return;
        }
        error = "Refresh Token failed."
        logger.log("ERROR",error) ;
        res.status(400).json({ error: error});
    } catch (err) {
        logger.log("ERROR",err) 
        return res.status(500).send({ message: err });
    };
};
