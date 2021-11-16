const express = require("express");
const axios = require("axios");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
//instate express
const app = express();


dotenv.config();








//built in level midleware
app.use(express.json());
app.use(cors0());
app.use(morgan("dev"));

//middlewares

//routers

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
console.log(`server on ${PORT}`);
})