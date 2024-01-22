import User from "../../user/model/user.model.js"
import bcryptjs from 'bcryptjs'

const signUP = async(req,res) => {
    try {
        const { userName, email, password } = req.body;
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({ userName, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({
            message: "User created successfully",
        });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({
            message: "An error occurred during signup. Please try again later.",
        });
    }
}
const signIn = async(req,res) => {

}






export {signUP,signIn}