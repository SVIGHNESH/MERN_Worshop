import mongoose from "mongoose";
let LoginSchema = new mongoose.Schema({
    username:String,
    password:String
});

let LoginModel = mongoose.model("login",LoginSchema);
export default LoginModel;