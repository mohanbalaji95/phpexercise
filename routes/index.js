var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://mbalaji:ammu9944@ds133360.mlab.com:33360/heroku_0sb1lwt6';

var controllerMongoCollection = require('../controllers/database'); //load controller code dealing with database mongodb and Routes collection

/* GET home page. */

router.get('/getAllOrders', controllerMongoCollection.getAllOrders);


//now processing post
router.post('/storeData', function(req, res, next) {
//expecting data variable called order--retrieve value using body-parser
var value_name = req.body.order  //retrieve the data associated with order
res.send("order succesfully received: " + value_name);
});



module.exports = router;
