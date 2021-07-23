
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Application = require('../models/Applicationsmodel'); 

var app = express();

/* GET application. */
router.get('/', function (req, res, next) {
   res.render('Application')
}); 


router.post('/', function (req, res, next) {
   var newApplication = new Application(req.body);
   console.log("Data>>>>>",newApplication)
   newApplication.save()
   .then(data => {
      console.log(data)
      res.render('Homepage')
      
   })
   .catch(err => {
      console.log(err)
      res.status(400).send("Unable to save to database")
   });
   
}); 

     //retrieving
    app.get('/Application', function(req, res){
    Application.find(function(err, response){
        console.log(response);
     });
    });
    
    

module.exports = router;

