const dotEnv = require("dotenv/config");
const express = require("express");
const app = express();
const db = require("./config/mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes")
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, (err) => {
    if(err){
        console.log({Error: "Failed To Load Server 😥😥", err});
    }else{
        console.log(`Server is running on port ${port} 😉😉`);
    }
});