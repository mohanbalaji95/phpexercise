var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://mbalaji:ammu9944@ds133360.mlab.com:33360/heroku_0sb1lwt6';

var controllerMongoCollection = require('../controllers/database'); //load controller code dealing with database mongodb and Routes collection

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/storeData', controllerMongoCollection.saveOrders);

router.get('/getAllOrders', controllerMongoCollection.getAllOrders);
router.get('/successSave', controllerMongoCollection.saveOrders);

module.exports = router;
