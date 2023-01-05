// Load modules
const bodyParser = require("body-parser");
const cache_controller = require("./src/controllers/cache.controller");
const logger = require("./src/helpers/logging.helpers");
const cors = require("cors");
const express = require("express");
const routesPath = "./src/routes/";
const {sequelize, Sequelize} = require("./src/models/index.js");

require("dotenv").config();

const backendPort = process.env.BACKEND_LISTEN_PORT;
const cacheNames = ["areas", "arena_details_and_sport_id", "sports"];

const app = express();

const corsOptions = {
  origin: [ "http://localhost:5052", "http://localhost:8081" ]
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); // Parse requests of content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded

// ROUTES
app.use("/api/auth", require(routesPath + "auth.route"));
app.use("/api/cache", require(routesPath + "cache.route"));
app.use("/api/search", require(routesPath + "search.route"));
app.use("/api/test", require(routesPath + "test.route"));

// Makes app listen to configured port
app.listen({ port:backendPort }, async () => {
    logger.log("INFO", `Server up on: http://localhost:${backendPort}`);
    await sequelize.authenticate();
    logger.log("INFO", "Database connected!");
    await cache_controller.clearCache();
    logger.log("INFO", "Caches were cleared!")
    for (let i = 0; i < cacheNames.length; i++) {
      await cache_controller.setCache(cacheNames[i]);
      logger.log("INFO", `New cache data: "${cacheNames[i]}" was created in DB!`)
    }
});
