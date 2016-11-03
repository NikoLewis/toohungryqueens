
const mongoose = require('mongoose');

mongoose.model('Comment', mongoose.Schema({
	commentText: String,
	postId: String,
	author: String
}));