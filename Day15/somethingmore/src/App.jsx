import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [data, setData] = useState(0)
  const decreasing = () => {

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

    setData(data-10)

  }
  const increasing = () => {

    // setData((next)=>next+1)
    // setData((next)=>next+1)
    // setData((next)=>next+1)
    // setData((next)=>next+1)
    // setData((next)=>next+1)
    // setData((next)=>next+1)
    // setData((next)=>next+1)
    // setData((next)=>next+1)
    // setData((next)=>next+1)

    setData(data+ 10)


  }

  return (
    <>
      <div>{data}</div>
      <br />
      <br />
      <button onClick={decreasing}>Decrease by 10  </button>
      <button onClick={increasing}>Increase by 10  </button>

    </>
  );
}

export default App;
