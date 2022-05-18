const express = require('express');
const path = require('path');
const homePage= require('./routes/home')
const api = require('./routes/note')


//initialize the app & create a port number
const app = express();
const PORT = process.env.PORT || 3002;

//Middleware
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));


//get routes for the public view HTML routes
app.use(express.static(path.join(__dirname, './public')));

//set routes for the database API
app.use('/api', api)

//HTML routes
app.use('/', homePage)


app.listen(PORT, console.log(`Server is runing on ${PORT}`));