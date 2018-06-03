const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const routes = require( "./api/routes/routes.js" );
const bodyParser = require("body-parser");

app.use( "/", express.static( "frontend") );
app.use( "/css", express.static( "frontend/css") );
app.use( "/js", express.static( "frontend/js") );
app.use( bodyParser());
// app.use(bodyParser.urlencoded({
//  extended: false
// }));
// app.use(bodyParser.json());

routes( app );
app.listen( port );
console.log( "Express started on: " + port );
