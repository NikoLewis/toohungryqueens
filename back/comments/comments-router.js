/////////////////////////
// Routes for getting Comments
/////////////////////////

const router = require('express').Router();
const Comment = require('mongoose').model('Comment');

//Get all Comments from database
const getComments = (req, res) => {
  console.log('getComments', req.params);
  Comment.find({postId: req.params.postId}, (err,data) => {
    res.send(data);
  })
}


//Configure router for get and post calls
router.get('/:postId', getComments)

module.exports = router;
