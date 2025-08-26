// import express from 'express';
// import cors from 'cors';

// let app = express()
// app.use(cors())
// app.use(express.json())


// let data = [
//     {
//         "id": 1,
//         "name": "praveem",
//         "location": "barely"
//     },
//     {
//         "id": 2,
//         "name": "Vighnesh",
//         "location": "SPN"
//     }
// ]


// app.get("/", (req, res) => {
//     res.send(data);
// });


// app.post('/',(req,res)=>{
//     let id = data[data.length -1].id

//     let new_user={"id":id+1, ...req.body}
//     data = [...data,new_user]
//     res.send(data)
// })
// app.get("/:id", (req, res) => {
//     let { id } = req.params;
//     const user = data.find(item => item.id === parseInt(id));
//     if (user) {
//         res.json(user)
//     } else {
//         res.status(404).json({ error: "User not found" });
//     }
// });

// app.put('/:id',(req,res)=>{
//     let {id}  = req.params
//     let u_data = req.body;
//     data = data.map((user)=>{
//         return user.id == id ? {...user, ...u_data} : user
//     })
//     res.send(data)
// })

// app.listen(5000, () => {
//     console.log("working on 5000");
// });  
import { thisthatthere } from './routers.js';
import express from 'express';
import './db.js'
import cors from 'cors';

let app = express();
app.use(cors());
app.use(express.json()); // Add this to parse JSON requests
app.use('/thisthatthere', thisthatthere);

app.listen(5000, () => {
    console.log("working on 5000");
});

