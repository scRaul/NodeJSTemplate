require("dotenv").config;
const express = require('express');
const path = require('path');
const server = express();


//templating language ejs
server.set("view engine", "ejs");
server.set('views', path.join(__dirname, 'Views'));
server.use(express.static("Public"));
 
const footballRoute = require('./Routes/footballRoute');
//routes
server.get('/', (req, res) => {
   res.render('Pages/home');
});
server.use('/scores',footballRoute);



const port = process.env.PORT || 8080;
server.listen( port, ()=>{
    console.log(`Node Server is listening at localhost:${port}`);
})