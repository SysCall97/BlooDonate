const mongoose = require("mongoose");
const donorService = require("../services/donorService");
const userService = require("../services/userService");

const donorController = {};

// register is the function to register as a donor
donorController.register = async (req, res) => {
    const toString = Object.prototype.toString;
    try {
        const area = (!!req.body.area) && (req.body.area.constructor === Array) ? [...req.body.area] : [req.body.area];
        const info = {
            uid: mongoose.Types.ObjectId(req.body.uid),
            mobile: req.body.mobile,
            bloodGroup: req.body.bloodGroup,
            area: area
        };

        const data = await donorService.register(info);
        return res.status(200).json({ message: "Registered successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// donorBloodGroup function will list all the donor of a particular blood group of all regions
donorController.donorBloodGroup = async (req, res) => {
    try {
        const bloodGroup = req.body.bloodGroup;
        const data = await donorService.donorBloodGroup({ bloodGroup });
        const response = [];

        for (const info of data) {
            const donor = await userService.findById({ id: info.uid });
            response.push({
                name: donor.name,
                mobile: info.mobile,
                bloodGroup: info.bloodGroup
            });
        }

        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// donorArea function will bring all the donor of a particular area 
donorController.donorArea = async (req, res) => {
    try {
        const area = req.body.area;
        const data = await donorService.donorArea({ area });
        const response = [];

        for (const info of data) {
            const donor = await userService.findById({ id: info.uid });
            response.push({
                name: donor.name,
                mobile: info.mobile,
                bloodGroup: info.bloodGroup
            });
        }
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// donorBloodGroupArea function will list all the donor of a particular blood group of a particular area
donorController.donorBloodGroupArea = async (req, res) => {
    try {
        const area = req.body.area;
        const bloodGroup = req.body.bloodGroup;

        const data = await donorService.donorArea({ area });
        const response = [];

        for (const info of data) {
            if (info.bloodGroup === bloodGroup) {
                const donor = await userService.findById({ id: info.uid });
                response.push({
                    name: donor.name,
                    mobile: info.mobile,
                    bloodGroup: info.bloodGroup
                });
            }
        }
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = donorController;