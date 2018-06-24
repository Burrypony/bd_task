const cookieParser = require('cookie-parser');
const session = require('express-session');
const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const routes = require( "./api/routes/routes.js" );
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');

const sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
      console.log( req.session.user );
      next();
  } else {
    res.redirect('/login');
      
  }    
};

app.use(bodyParser.urlencoded({
  extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    key: 'user_sid',
    secret: 'DEAFBEEF',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.route( "/dashboard" ).get(sessionChecker, (req, res) => {
  res.sendFile(__dirname + '/frontend/index.html');
})
app.use( "/css", express.static( "frontend/css") );
app.use( "/js", express.static( "frontend/js") );


app.get('/', sessionChecker, (req, res) => {
  res.redirect('/login');
});

routes( app );

app.route("/config.js")
  .get((req,res) => {
    let status = "undefined";
    if ( req.session.user )
    {
      status = '"'+ req.session.user +'"';
    }
    res.send( `const UserStatus=${status}` )
  } );

app.route('/login')
    .get((req, res) => {
        res.sendFile(__dirname + '/frontend/login.html');
    })
    .post((req, res) => {
        const username = req.body.username,
            password = req.body.password;

        if ( username == "buhgalter" && password == "hello" )
        {
          req.session.user = "admin";
          res.redirect( "/dashboard" );
        }
        else if ( username == "director" && password == "dollar" )
        {
          req.session.user = "director";
          res.redirect( "/dashboard" );
        }
        else
        {
          if ( username == "director" || username == "buhgalter" )
          {
            res.redirect( "/login?err=wrongpassword" );
          }
          else
          {
            res.redirect( "/login?err=wrongusername" );
          }
        }   
    });



app.listen( port );
console.log( "Express started on: " + port );

