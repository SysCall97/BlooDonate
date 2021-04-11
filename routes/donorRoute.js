// dependencies
const donorController = require('../controllers/donorController');
const { authenticate } = require('../middlewares/authenticate');
const donorRoute = require('express').Router();

// routes

// '/register' route is to register a donor
donorRoute.post('/register', authenticate, donorController.register);

// '/donorArea' route will bring all the donor of a particular area 
donorRoute.get('/donorArea', donorController.donorArea);

// '/donorBloodGroup' route will list all the donor of a particular blood group of all regions
donorRoute.get('/donorBloodGroup', donorController.donorBloodGroup);

// '/donorBloodGroupArea' route will list all the donor of a particular blood group of a particular area
donorRoute.get('/donorBloodGroupArea', donorController.donorBloodGroupArea)

module.exports = donorRoute;