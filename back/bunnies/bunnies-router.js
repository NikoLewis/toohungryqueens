/////////////////////////
// Routes for getting Bunnies
/////////////////////////

const router = require('express').Router();
const Bunny = require('mongoose').model('Bunny');

//Get all Bunnies from database
const getBunnies = (req, res) => {
  Bunny.find({}, (err, data) => {
    res.send(data);
  })
}


//Configure router for get and post calls
router.route('/')
  .get(getBunnies)

module.exports = router;
