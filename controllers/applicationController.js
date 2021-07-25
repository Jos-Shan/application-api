var Application = require('../models/Applicationsmodel'); 

const createApplication = async (req, res) => {
    try{
        const { body } = req;
        const application = new Application(body);
        await application.save();
        return res.status(201).send(application);
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    } 
};

//fetch all applications
const fetchApplications = async(req, res) =>{
  try{
    let applications = await Application.find({}); 
    res.status(200).send(applications)
  }catch(error){
    console.log(error)
      res.status(500).send(error)
  }
};

module.exports = {createApplication, fetchApplications};
 
    