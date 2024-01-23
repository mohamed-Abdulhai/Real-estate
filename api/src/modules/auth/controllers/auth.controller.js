import User from "../../user/model/user.model.js"
import bcryptjs from 'bcryptjs'
import dotenv from 'dotenv'
dotenv.config()


const signUP = async (req, res, next) => {
    const { userName, email, password, phone } = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10)
    try {
        await User.create({
            userName,email,password:hashedPassword,phone
        })
        res.status(201).json({
            message:'success'
        })
    } catch (error) {
        next(error)
    }
}
const signIn = async(req,res) => {
    res.status(500).json({error})
}






export {signUP,signIn}