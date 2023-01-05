const controller = require("../controllers/search.controller");
const express = require("express");
const router = express.Router();

router.get("/getSearchResultsHome", controller.getSearchResultsHome);

module.exports = router;
