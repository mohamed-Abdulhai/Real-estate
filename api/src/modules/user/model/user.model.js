import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 100,
        trim:true
    },
    email: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 200,
        trim: true,
        lowerCase:true
    },
    password: {
        type: String,
        required: true,
        trim:true,
    },
    phone: {
        type: Number,
        required: true,
        trim:true
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default:'USER'
    },

})


const User = mongoose.model('User', userSchema)
export default User