var express = require('express');
var router = express.Router();
var Application = require('../models/Applicationsmodel'); 

router.post('/', function (req, res) {
   try{
      const { body } = req;
      const application = new Application(body);
      await application.save();
      return res.status(201).send(application);
   }catch(error){
      console.log(error)
      res.status(400).send(error);
   } 
   
}); 

//fetch all applications
router.get('/', (req, res)=>{
   try{
      let applications = await Application.find({})
      return res.status(200).send(applications);
   }catch(error){
      console.log(error)
      res.status(404).send(error);
   }
   
})
    

module.exports = router;

