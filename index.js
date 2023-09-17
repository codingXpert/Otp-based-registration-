const dotEnv = require("dotenv/config");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;


app.listen(port, (err) => {
    if(err){
        console.log({Error: "Failed To Load Server 😥😥"});
    }else{
        console.log(`Server is running on port ${port} 😉😉`);
    }
});