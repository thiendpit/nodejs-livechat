require("dotenv").config();
import express from "express";
import ConnectDB from "./models/config/connectDB";
import ContactModel from './models/contact.model';

let app = express();

//connect to mongodb
ConnectDB();

let hostname = 'localhost';
let port = 3000;

app.use('/test-database', async (req, res) => {
  try{
    let item = {
      userId: "17071995",
      contactId: "1707199517071995"
    }
    let contact = await ContactModel.createNew(item);
    res.send(contact);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, hostname, () => {
  console.log(`Server listening on port ${port}`);
});
