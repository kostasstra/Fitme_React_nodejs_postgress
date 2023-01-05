const controller = require("../controllers/cache.controller");
const express = require("express");
const router = express.Router();

router.get("/getCache", controller.getFromCache);

module.exports = router;
