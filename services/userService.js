const User = require('../models/userModel');
const Dump = require('../models/dumpedTokenModel');

const userService = {};

userService.signIn = (data) => {
    return User.create(data);
}

userService.logIn = (data) => {
    return User.find({ email: data.email })
}

userService.findById = ({ id }) => {
    return User.findById(id);
}

userService.logOut = (data) => {
    return Dump.create(data);
}

userService.isDumped = (token) => {
    return Dump.find({ token: token });
}

module.exports = userService;