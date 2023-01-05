const { authJwt, verifyRegister } = require("../middleware");
const controller = require("../controllers/auth.controller");
const express = require("express");
const router = express.Router();

router.post("/login", controller.login);

router.post("/refreshToken", 
  [authJwt.verifyRefreshToken], 
  controller.refreshToken,
  function (req, res, next) {next()},
);

router.post("/register", 
  [verifyRegister.checkDuplicateEmail, verifyRegister.checkRolesExisted], 
  controller.register, 
  function (req, res, next) {next()},
);

module.exports = router;
