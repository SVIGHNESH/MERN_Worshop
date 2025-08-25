import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vighnesh:admin@cluster0.qavyqv1.mongodb.net/asdfghjk?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("DB Connected"))
.catch((error) => console.log("DB Connection Error:", error));