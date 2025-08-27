import mongoose from "mongoose";



const connect = async () => {
   await  mongoose.connect("mongodb+srv://vighnesh:admin@cluster0.qavyqv1.mongodb.net/asdfghjk?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => console.log("DB Connected"))
        .catch((error) => console.log("DB Connection Error:", error));

}



const queries = async() => {
   await connect();
    let LoginSchema = new mongoose.Schema({
        username: String,
        password: String
    });

    let Login = mongoose.model("login", LoginSchema);


    //  await Login.create({
    //     username: "Suresh Rajpoot",
    //     password: "qwerty"
    // })

    // const query = { username: "Suresh Rajpoot" };
    // await Login.deleteMany(query);



    // let ldoc =  await Login.find();
//    let doc =  await Login.find({username:"Ritik"});
//    let doc =  await Login.findOne({username:"Ritik"});

 // console.log(await Login.find({username:{"$eq":"Ritik"}}));
    // console.log(ldoc);

    // await Login.updateOne(
    //     { username: "Ritika" }, // filter by username
    //     { $set: { username: "Suresh Rajpoot" } } // set new password
    // );



    //UPDATION
    // await Login.updateMany({username:"Suresh Rajpoot "},{$set:{password:"12345678"}})
    // await Login.updateMany({username:"1234567"},{$set:{username:"Suresh Rajpoot"}})

    
    let doc = await Login.find();
    console.log(doc);
    




    
}

queries();