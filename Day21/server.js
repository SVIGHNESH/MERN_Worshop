const express = require("express");

let app = express();

let data = [{
    "id":1,
    "name":"vighnesh",
    "location":"SPN"
},{
    "id":2,

    "name":"Ritik",
    "location":"NY"

},{
    "id":3,

    "name":"Suresh",
    "location":"LA"
}]

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/:id",(req,res)=>{
    let {id} = req.params;
    let user = data.filter((item)=>{
        return item.id == id
    })
    res.send(user);
})

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})