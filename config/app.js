const express = require('express');
require('dotenv').config();
global.Env = process.env;


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const http = require('http').Server(app);

http.listen(Env.PORT, ()=>{
    console.log('Port' + ' '+`${Env.PORT}` + ' ' +'server is running...');
});

module.exports = app;