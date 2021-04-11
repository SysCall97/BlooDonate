const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const userService = require("../services/userService");

const userController = {};

userController.signIn = async (req, res) => {
    try {
        const data = await userService.signIn({
            name: req.body.name,
            email: req.body.email,
            password: crypto.createHash('md5').update(req.body.password).digest('hex')
        });
        const info = {
            uid: data._id,
            signedIn: new Date().toLocaleString()
        }
        const token = await jwt.sign(info, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_MINUTE * 60 });

        return res.status(200).json({ token });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

userController.logIn = async (req, res) => {
    try {
        const data = await userService.logIn({
            email: req.body.email,
        });

        const password = await crypto.createHash('md5').update(req.body.password).digest('hex');

        if (data && data.length > 0) {
            if (data[0].password === password) {
                const info = {
                    uid: data[0]._id,
                    signedIn: new Date().toLocaleString()
                }
                const token = await jwt.sign(info, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_MINUTE * 60 });
                return res.status(200).json({ token });
            } else {
                return res.status(401).json({ message: "Wrong password" });
            }
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

userController.logOut = async (req, res) => {
    try {
        const data = await userService.logOut({ token: req.headers.authorization });
        return res.status(200).json({ message: "Successfully logged out" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = userController;