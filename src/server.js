require("dotenv").config();
import express from "express";
import ConnectDB from "./models/config/connectDB";
import configViewEngine from "./models/config/viewEngine";
import initRoutes from "./routes/web";

// Init app
let app = express();

// connect to mongodb
ConnectDB();

// config view engine
configViewEngine(app);

// init all routes
initRoutes(app);

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
