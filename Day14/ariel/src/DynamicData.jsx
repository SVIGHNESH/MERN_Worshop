import { useState } from "react";




function DynamicData() {
    // const [data, setData] = useState("logged in")
    // const handleclick = () => {
    //     data1 = "Loggend In "
    //     console.log(data1);
    // }
    // const li = ["apple", "ball", "cat"]
    // let data1 = "Are you REndering  "

    // const obj = { id: 1, "name": "Vighnesh", "College": "RBCET" }
    const [data, setData] = useState({ "email": "", "password": "" })
    const { email, password } = data

    const handlechange = (e) => {
        const{name,value} = e.target
        setData({...data,
            [name]:value
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        // email.trim() ? alert("email entered") : alert("Plter Valid Email")
        if (!email.trim()) {
            alert("Plz Enter Valid Email");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }
        alert("email and password entered");
       }

       
    return (
        <>
            {/* <h1>{data1}</h1> */}

            {/* <button onClick={handleclick}>logout</button>
            <button onClick={()=>{
                setData("Your are loggin in ")
            }}>logout</button> <h1>{data1}</h1>

            <button onClick={handleclick}>logout</button>
            <button onClick={()=>{
                setData("Your are loggin in ")
            }}>logout</button> * */}


        

            {/* {Object.keys(obj).map((element) => {
                    // return <li key={obj["id"]}>{obj[element]}</li>
                    <li key={obj["id"]} >obj[element]</li>
                    <input value = obj[element]/>
                })} 



            {/* <ul>
            {for(let i in obj)}
                    return <li key={element.id}>{element}</li>
                
            </ul> */}



            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email"  name = "email" required value={email} onChange={handlechange} />
                <input type="password" placeholder="password" name ="password" required value={password} onChange={handlechange} />
                <input type="submit"/>


            </form>
        </>
    );
}
export default DynamicData