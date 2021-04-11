// dependencies
const userRoute = require('express').Router();
const userController = require('../controllers/userController');

// Routes
userRoute.post('/signin', userController.signIn);
userRoute.get('/login', userController.logIn);
userRoute.post('/logout', userController.logOut);

module.exports = userRoute;