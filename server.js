
require('dotenv').config()
const express = require('express');
const app = express();

const port= process.env.SERVER_PORT | 3000;
// console.log(process.env);
app.listen(port, function(){
    console.log('server is running at '+port);
});