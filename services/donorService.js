const Donor = require("../models/donorModel");

const donorService = {};

donorService.register = (data) => {
    return Donor.create(data);
}

donorService.donorBloodGroup = ({ bloodGroup }) => {
    return Donor.find({ bloodGroup: bloodGroup });
}

donorService.donorArea = ({ area }) => {
    return Donor.searchByArea(area)
}

module.exports = donorService