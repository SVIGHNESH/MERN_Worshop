import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // let [inc, setInc] = useState(0)
  // let [dec, setDec] = useState(0)



  let [users,setUsers] = useState([])
  let [data, setData] = useState({ "email": "", "name": "" })
  // let [email, setEmail] = useState("")
  // let [name, setName] = useState("")
  // const{email,name} = data;

  // let [d2, setD2] = useState("Normal")
  // console.log(email);
  // const decreasing = () => {

  // setData(data-1)

  // setData(data-1)
  // setData((prev => prev - 1))
  // setData((prev => prev - 1))
  // setData((prev => prev - 1))
  // setData((prev => prev - 1))
  // setData((prev => prev - 1))
  // setData((prev => prev - 1))
  // setData((prev => prev - 1))
  // setData((prev => prev - 1))
  // setData((prev => prev - 1))
  // setData((prev => prev - 1))
  // setDec((prev)=>prev -1)
  // setData(`Decrease by ${dec - 1 }`)
  //    setDec(dec - 1)
  //   setData(`Decrease by ${dec-1}`)
  // }
  // const increasing = () => {

  // setData((next)=>next+1)
  // setData((next)=>next+1)
  // setData((next)=>next+1)
  // setData((next)=>next+1)
  // setData((next)=>next+1)
  // setData((next)=>next+1)
  // setData((next)=>next+1)
  // setData((next)=>next+1)
  // setData((next)=>next+1)

  //  setData(`Increse  by ${inc  + 1 }`)
  //   setInc(inc + 1)
  //   setData(`Increase by ${inc+1 }`)


  // }


  // const changingInTheInput = (e)=>{
  //   setData(e.target.value)
  // }


  // const emailChange = (e) => {
  //   // const {email,name} = e.target
  //   // setData({...data,
  //   //         [email]:value
  //   //     })

  //   setEmail(e.target.value)

  // }
  // const nameChange = (e) => {
  //   setName(e.target.value)
  // } 



  const inputChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // alert([data.email, data.name])
    let user = {
      id:Date.now(),
      name : data.name,
      email : data.email,

    }


    setUsers([...users,user])

   
  }

  

  return (
    <>

      {/* <div>{inc} </div> */}
      {/* <div>{data} </div> */}
      {/* <div>{dec} </div> */}
      {/* <div>{dec} </div> */}
      {/* <br /> */}

      {/* <button onClick={decreasing}>Decrease by 1  </button> */}
      {/* <button onClick={increasing}>Increase by 1  </button> */}
      {/* <inpu */}
      {/* <input
      
      value={data}
      onChange={changingInTheInput}
      />
      <input
      
      value={data}
      onChange={changingInTheInput}
      /> */}



      <form onSubmit={handleSubmit}>
        <input type="email"
          placeholder='Enter your Email Here'
          value={data.email}
          name='email'
          onChange={inputChange}
        />

        <input type="text"
          name='name'
          placeholder='Enter your Name Here'
          value={data.name}
          onChange={inputChange}
        />

        <input type='submit' />
      </form>
    </>
  );
}

export default App;
