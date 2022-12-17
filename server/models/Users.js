const mongoose = require('mongoose')



const UserSchema = new mongoose.Schema({
    standard: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    version: {
        type: Number,
        required: true,
    }
});
const Usermodel = mongoose.model("users", UserSchema);
module.exports = Usermodel;   