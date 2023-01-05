const db = require("../models");
const ROLES = db.ROLES;
const { Users, Sequelize} = require("../models");

const checkDuplicateEmail = (req, res, next) => {
    Users.findOne({
        where: { email: req.body.email }
    }).then(user => {
        if (user) {
            res.status(400).send({ message: "Failed! Email is already in use!"});
            return;
        }
        next();
    });
};

const checkRolesExisted = (req, res, next) => {
    if (req.body.role) {
        if (!ROLES.includes(req.body.role)) {
            res.status(400).send({message: "Failed! Role does not exist = " + req.body.role});
            return;
        }
    }
    next();
};

const verifyRegister = {
    checkDuplicateEmail: checkDuplicateEmail,
    checkRolesExisted: checkRolesExisted
};

module.exports = verifyRegister;
