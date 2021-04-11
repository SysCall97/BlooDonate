const mongoose = require('mongoose');

const uri = process.env.URI;

if(!uri) {
    console.log("Mongo URI not found");
    return new Error("Mongo URI not found");
}

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Successfully connected");
        }
    }
);

module.exports = mongoose;