const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

module.exports.authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

        const isDumped = await userService.isDumped(token);

        if (isDumped && isDumped.length > 0) {
            res.status(401).json({ message: "Unauthorized user" });
        } else {
            req.body.uid = decodedToken.uid;
            next();
        }
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}