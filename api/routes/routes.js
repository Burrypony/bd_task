"use strict";

const controller = require( "../controllers/controller" );

module.exports = function( app )
{
  app.route( "/api/providers" )
    .get( controller.listAllProviders );

}
