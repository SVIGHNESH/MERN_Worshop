import mongoose from "mongoose";

let thisthatthereSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true // This will add createdAt and updatedAt fields
});

let User = mongoose.model("User", thisthatthereSchema);
export default User;
