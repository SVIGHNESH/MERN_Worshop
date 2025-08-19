import React, { useEffect } from 'react'
import axios from 'axios'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let api = "http://localhost:5000/0"
  const getData = ()=>{
    return  axios.get(api)

  }
  const get =async()=>{
      let data = await getData()
      console.log(data)
  }
  useEffect(()=>{
     get()
  })
  return (
    <>
        <button>
          Get Data 
        </button>
    </>
  )
}

export default App