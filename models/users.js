const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        minlength: 8,
    },
    role: {
        type: String,
        enum: ["merchant", "customer"],
    },
    points: {
        type: Number,
        min: 0,
        default: 0,
    },
    image: {
        type: String,
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;