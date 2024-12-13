// for node js servers, we use 'require' to import express library
// path is used to connect different locations on my computer
//

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// need to import bodyParser library to our server because it will parse through POST data

const indexRouter = require('./routes/index.js')
// bringing in the context of our index.js file

const app = express();
// this creates the express server
// enable parsing of POST request body
app.use(bodyParser.urlencoded({extended: false}));

// declaring our static file location for our stylesheets in the public directory
const staticFileLocation = path.join(__dirname, 'public');
app.use(express.static(staticFileLocation))

// tell app where the views (HTML or templates) are
// views are the things that will become html files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');      // use handlebars to generate views

// when our server starts running, our server needs to figure out what kind of request this is and how to respond to it
// the job of a router is look at our requests and translates each incoming HTTP request
// router determines what method a given request needs to use
app.use('/', indexRouter)       // all requests to the app will be passed to indexRouter


// start server running
// .listen listens for incoming requests
// process.env.PORT means if you're told to write on a specific port it will use that OR port 3000
// the web application server host is likely going to decide which port they want to use, otherwise it will use 3000
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server started on port', server.address().port);
})