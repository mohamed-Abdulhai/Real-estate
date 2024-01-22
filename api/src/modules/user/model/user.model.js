import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        minLength:3,
        maxLength: 100,
        required: true,
        trim: true,
        unique:true
    },
    email: {
        type: String,
        minLength: 5,
        maxLength:200,
        required: true,
        trim: true,
        lowercase: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength:8
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default:"USER",
    }
}, { timestamps: true })


const User = mongoose.model('User', userSchema)
export default User