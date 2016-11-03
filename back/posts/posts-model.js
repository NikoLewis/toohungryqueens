/////////////////////////
// Schema and database model configuration for blog posts
/////////////////////////

const mongoose = require('mongoose');

//Schema (aka blueprtint) for our blog posts
const blogPostSchema = mongoose.Schema({
  title: String,
  author: String,
  text: String,
  // image1: String,
  // image2: String
});

mongoose.model('Post', blogPostSchema);


mongoose.model('Bunny', mongoose.Schema({
	name: String
}));