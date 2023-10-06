const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
require("dotenv").config();

const PasswordRouters = require("./Password.router.js");



app.use(bodyParser.json());

app.use("/api/passwords/", PasswordRouters);


const port = Number(process.env.PORT) || 3001;

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})