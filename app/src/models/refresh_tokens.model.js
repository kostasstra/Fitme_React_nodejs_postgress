"use strict";
const jwt = require("jsonwebtoken");
require("dotenv").config();

var jwt_refresh_expiration = parseInt(process.env.REFRESH_TOKEN_LIFE);
var jwt_refresh_secret = process.env.REFRESH_TOKEN_SECRET;

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class RefreshTokens extends Model {
        static associate({Users}) {
            this.belongsTo(Users, {foreignKey: "user_id"});
        }                 
    };

    RefreshTokens.init({
        token: {
            type:DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        expiry_date: {
            type:DataTypes.DATE,
            allowNull: false,
        },
        user_id: {
            type:DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        tableName: "refresh_tokens",
        modelName: "RefreshTokens",
    });

    RefreshTokens.createToken = async function (user) {
        let token = jwt.sign(
            { "user_id": user.user_id, }, 
            jwt_refresh_secret,
            { algorithm: "HS256", expiresIn: parseInt(jwt_refresh_expiration) }
        );
        let expiredAt = new Date();
        expiredAt.setSeconds(expiredAt.getSeconds() + jwt_refresh_expiration);
        let refreshToken = await this.create({
            token: token,
            user_id: user.user_id,
            expiry_date: expiredAt.getTime(),
        });
        return refreshToken.token;
    };

    RefreshTokens.verifyExpiration = (token) => {
        function parseJwt (token) {
            let base64Url = token.split('.')[1];
            let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            return JSON.parse(jsonPayload);
        };
        const tokenExp = parseJwt(token.dataValues.token).exp;
        return tokenExp < new Date().getTime() / 1000;
    };

    return RefreshTokens;
};
