import React from 'react'
import {axios} from "axios"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let api = "http://localhost:5000/0"
    const data = axios.get(api)
    console.log(data)
  return (
    <>
      
      
    </>
  )
}

export default App
