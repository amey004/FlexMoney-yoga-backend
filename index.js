const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const client = require("./database");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "https://flexmoney-yogaclass.netlify.app/",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);
app.enable("trust proxy");
app.use('/',require("./registration"))

const port = process.env.PORT;
console.log("starting server");
app.listen(port, () => console.log(`Server started on port: ${port}`));

