var router = require('express').Router();
let {createApplication, fetchApplications} = require('../controllers/applicationController');

router.post('/', createApplication);
router.get('/', fetchApplications);


module.exports = router;


