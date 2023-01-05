const jwt = require("jsonwebtoken");
const { Users, Roles, Sequelize} = require("../models");
const { TokenExpiredError } = jwt;
const logger = require("../helpers/logging.helpers");
require("dotenv").config();

var jwt_secret = process.env.ACCESS_TOKEN_SECRET;
var jwt_refresh_secret = process.env.REFRESH_TOKEN_SECRET;

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

const catchError = (err, res) => {
    let error = "";
    if (err instanceof TokenExpiredError) {
        error = "Unauthorized! Access Token was expired!";
        logger.log("ERROR",error) ;
        return res.status(401).send({ error: error });
    }
    error = "Unauthorized";
    logger.log("ERROR",error) ;
    return res.sendStatus(401).send({ error: error });
};

const getRoleNameByRoleId = async (role_id) => {
    try {
        const response = await Roles.findOne({ 
            attributes:["role_name"],
            where: {role_id: role_id}
        });
        if (response) {
            const role_name = await response.dataValues.role_name;
            return role_name;
        } else {
            logger.log("WARNING","No role found with the provided rold_id");
            return null;
        }
    } catch (error) {
        logger.log("ERROR",error) ;
        return null;
      }
};

const getUserByUserId = async (user_id) => {
    try {
        const response = await Users.findByPk(user_id);
        if (response) {
            return response;
        } else {
            logger.log("WARNING","No user found with the provided user_id");
            return null;
        }
    } catch (error) {
        logger.log("ERROR",error) ;
        return null;
      }
};

// Called from routers

const isAdmin = async (req, res, next) => {
    let error = ""
    const user_id = req.userId;
    const user = await getUserByUserId(user_id);
    if (user) {
        const role_name = await getRoleNameByRoleId(user.dataValues.role_id);
        if (role_name && role_name === "admin") {
            next();
            return;
        } 
    }
    error = "Require Admin Role!";
    logger.log("ERROR",error) ;
    res.status(403).send({ error: error });
    return;
};

const verifyToken = async (req, res, next) => {
    let error = "";
    const token = req.headers["x-access-token"];
    if (!token) {
        error = "No token provided!";
        logger.log("ERROR",error) ;
        return res.status(403).send({ error: error });
    }
    jwt.verify(token, jwt_secret, function (err, decoded) {
        if (err) {
            return catchError(err, res);
        }
        req.userId = decoded.user_id;
        next();
    });
};

const verifyRefreshToken = async (req, res, next) => {
    let error = "";
    const cookie_list = parseCookies(req)
    const token = cookie_list.refreshToken;
    if (!token) {
        error = "No token provided!";
        logger.log("ERROR",error) ;
        return res.status(403).send({ error: error });
    }
    jwt.verify(token, jwt_refresh_secret, function (err, decoded) {
        if (err) {
            return catchError(err, res);
        }
        req.userId = decoded.user_id;
        next();
    });
};

const authJwt = {
    verifyRefreshToken: verifyRefreshToken,
    verifyToken: verifyToken,
    isAdmin: isAdmin,
};

module.exports = authJwt;
