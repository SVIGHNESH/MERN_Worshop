const express = require("express");

let app = express();
app.use(express.json());

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



app.post("/", (req, res) => {
  let newUser = req.body;
  let id = data[data.length - 1].id + 1;
 newUser = {"id":id+1,...newUser}
  data.push(newUser);
  res.send(data);
});

app.put('/:id',(req,res)=>{
    let {id}  = req.params
    let u_data = req.body;
    data = data.map((user)=>{
        return user.id == id ? {...user, ...u_data} : user
    })
    res.send(data)
})

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})