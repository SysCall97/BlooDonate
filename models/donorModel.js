const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const ObjectId = mongoose.Types.ObjectId

const donorSchema = mongoose.Schema({
    uid: {
        type: ObjectId,
        unique: true,
        trim: true,
        required: true
    },
    mobile: {
        type: String,
        trim: true,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    area: {
        type: [String],
        required: true
    },
    registeredAt: {
        type: Date,
        default: Date.now()
    }
});

donorSchema.statics = {
    searchByArea: function (searchedArea) {
        return this.find({ area: { "$in": [searchedArea] } });
    }
}

module.exports = mongoose.model('donor', donorSchema);