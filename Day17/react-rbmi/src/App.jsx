import { useState } from 'react'
import axios from 'axios'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[data,setData] = useState()
  let api = "http://localhost:5000/0"
  const getData = (id)=>{
    return  axios.get(`${api}/${id}`)

  }
  const get =async(id)=>{
      let data = await getData(id)
      setData(data)
      console.log(data)
  }
  // useEffect(async()=>{
  //    get()
  // })
  return (
    <>
        <button onClick={()=>get(0)}>
          Get Data Person 2 
        </button>
    </>
  )
}

export default App