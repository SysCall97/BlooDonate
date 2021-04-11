const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dumpedTokenSchema = mongoose.Schema({
    token: {
        type: String,
        unique: true,
        required: true
    },
    signedOut: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('dumped-token', dumpedTokenSchema);