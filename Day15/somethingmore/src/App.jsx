import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let[data,setData]=useState(0)
  const decreasing = ()=>{
    
    setData(data-1)
    
    
  }
  const increasing = ()=>{
    
    setData(data+1)
    
    
  }
 
  return (
    <>
      <div>{data}</div>
      <br />
      <br />
      <button onClick = {decreasing}>Decrease by 1  </button>
      <button onClick = {increasing}>Increase by 1  </button>

    </>
  );
}

export default App;
