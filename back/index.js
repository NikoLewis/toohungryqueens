/////////////////////////
// Index page - import and organize all models and routes. export for use in server
/////////////////////////

//Models
const Posts = require('./posts/posts-model');
const Comments = require('./comments/comments-model');

//Routes
const home = require('./home/home-router');
const posts = require('./posts/posts-router');
const bunnies = require('./bunnies/bunnies-router');
const comments = require('./comments/comments-router');

module.exports = {
  models: {
    Posts: Posts
  },
  routes: {
    posts: posts,
    bunnies: bunnies,
    comments: comments,
    home: home
  }
}
