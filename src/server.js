require("dotenv").config();
import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import bodyParser from "body-parser"; 
import connectFlash from "connect-flash";
import configSession from "./config/session";

// Init app
let app = express();

// connect to mongodb
ConnectDB();

// Config session
configSession(app);

// config view engine
configViewEngine(app);

// enable post data for request
app.use(bodyParser.urlencoded({extended: true}));

// Enable flash messages
app.use(connectFlash());

// init all routes
initRoutes(app);

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
