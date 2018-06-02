const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const routes = require( "./api/routes/routes.js" );

app.use( "/", express.static( "frontend") );
app.use( "/css", express.static( "frontend/css") );
app.use( "/js", express.static( "frontend/js") );
routes( app );
app.listen( port );
console.log( "Express started on: " + port );
