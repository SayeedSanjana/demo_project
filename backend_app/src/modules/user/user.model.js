import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    phone: {
        type: String
    },
    address: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamp: true });

export const UserModel = mongoose.model("User", userSchema);