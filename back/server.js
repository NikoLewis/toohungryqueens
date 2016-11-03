/////////////////////////
//Server - starts our app's database connection and server
/////////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');


const router = require('express').Router();
const path = require('path')
const rootPath = path.join(__dirname, '../')
var bodyParser = require('body-parser');


//Require in models:
//(this is a necessary step that loads our models and registers them with mongoose)
const models = require('./index').models;
/*models= {
    Posts: Posts
  }*/

const routes = require('./index').routes;
/*routes =  {
    posts: posts,
    home: home
  }*/

//Connect to database and start server:
//(whatever we put after 'localhost/' will automatically be the name of database)
mongoose.connect('mongodb://localhost/blog-app');

//Store connection as variable
const db = mongoose.connection;
//Start the server after successful database connection:
db.on('open', () => {
  console.log('MONGOOSE CONNECTED!');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static('static')) //it finds assets/folder 
  app.use('/posts', routes.posts);
  app.use('/bunnies', routes.bunnies);
  app.use('/comments', routes.comments);
  app.use('*', (req, res) => {
    res.status(404).sendFile(rootPath + "./static/404.html");
  });
  //Launch server on port 4444:
  app.listen(3000, () => {
    console.log('App listening on port 3000');
  });
});
db.on('error', err => {
  console.log('MONGOOSE ERROR', err);
});

  //Configure router:
  // 
  // app.use(express.static('bundle'))
