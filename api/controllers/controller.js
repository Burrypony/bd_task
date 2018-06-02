"use strict";

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('data.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

exports.listAllProviders = function( req, res )
{
  db.all( "SELECT * FROM Providers", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}


