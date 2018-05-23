var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb:mbalaji:ammu9944@ds133360.mlab.com:33360/heroku_0sb1lwt6';

/* GET home page. */
router.get('/mongodb', function(req, res, next) {
    mongodb.MongoClient.connect(mongoDBURI, function (err, client) {
        if (err) throw err;
        //get handle to the database
        var theDatabase = client.db('heroku_0sb1lwt6');


        //get collection of Routes
        var Routes = db.collection('Routes');
        //get all Routes
        Routes.find({}).sort({name: 1}).toArray(function (err, docs) {
            if (err) throw err;

            response.render('pages/mongodb', {results: docs});

        });
        //close connection when your app is terminating.
        db.close(function (err) {
            if (err) throw err;
        });
    });//mongoDb closed
});//router closed



//now processing post
router.post('/storeData', function(req, res, next) {
//expecting data variable called order--retrieve value using body-parser
var value_name = req.body.order  //retrieve the data associated with order
res.send("order succesfully received: " + value_name);
});



module.exports = router;
