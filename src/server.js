require("dotenv").config();
import express from "express";
import ConnectDB from "./models/config/connectDB";
import configViewEngine from "./models/config/viewEngine";

// Init app
let app = express();

// connect to mongodb
ConnectDB();

// config view engine
configViewEngine(app);

app.get('/', (req, res) => {
  return res.render('main/master');
});

app.get('/login-register', (req, res) => {
  return res.render('auth/loginRegister');
});

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
