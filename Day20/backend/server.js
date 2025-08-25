import express from 'express';
import cors from 'cors';

let app = express()
app.use(cors())


let data = [
    {
        "id": 1,
        "name": "praveem",
        "location": "barely"
    },
    {
        "id": 2,
        "name": "Vighnesh",
        "location": "SPN"
    }
]


app.get("/", (req, res) => {
    res.send("Server is running!");
});


app.get("/:id",(req,res)=>{
app.get("/:id", (req, res) => {
    let { id } = req.params;
    const user = data.find(item => item.id === parseInt(id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
app.listen(5000, () => {
    console.log("working from 5000");
});
app.listen(5000,()=>{
    console.log("working from   5000 ")
})