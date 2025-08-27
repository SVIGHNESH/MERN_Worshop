import mongoose from "mongoose";
mongoose.connect("mongodb+srv://vighnesh:admin@cluster0.qavyqv1.mongodb.net/asdfghjk?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));