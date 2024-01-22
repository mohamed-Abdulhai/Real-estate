import mongoose from "mongoose";
export const DBConfig = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
    console.log('connect to db');
}).catch((error) => {
    console.log("fild",error);
})
}