import './App.css';
import { useState } from 'react';

function App() {
  // let [inc, setInc] = useState(0)
  // let [dec, setDec] = useState(0)
  let [data, setData] = useState("Normal")
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


  const changingInTheInput = (e)=>{
    setData(e.target.value)
  }

  
  return (
    <>

      {/* <div>{inc} </div> */}
      <div>{data} </div>
      {/* <div>{dec} </div> */}
      {/* <div>{dec} </div> */}
      {/* <br /> */}
      
      {/* <button onClick={decreasing}>Decrease by 1  </button> */}
      {/* <button onClick={increasing}>Increase by 1  </button> */}
      {/* <inpu */}
      <input
      
      value={data}
      onChange={changingInTheInput}
      />
    </>
  );
}

export default App;
