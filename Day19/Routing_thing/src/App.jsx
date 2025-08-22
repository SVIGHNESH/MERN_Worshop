// import {useEffect, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import Navbar from './Navbar
// import Home from './Home'

function App(){
  // const [login,setLogin] = useState(false);
  // const [dark,setDark] = useState(false);
  // useEffect(()=>{
  //     setLogin(localStorage.getItem("login"))
  //     console.log(login,"from useEffect");
  // })
  
  
  // const loogin =()=>{
  //   localStorage.setItem("login",true);
   
  //   setLogin(localStorage.getItem("login"))
  //         console.log(login,"Inside The Login Function ");

  // }

  // const loogout =()=>{
  //     localStorage.getItem("login",false);
  //     setLogin(localStorage.getItem("login"))
  //    console.log(login,"Inside the Logout Function ");
  // }
  return(
    // <div>
    //   <button style={{background: dark?"black":"blue"}} onClick={loogin}>Login</button>
    //   <button onClick={loogout}>Logout</button>
    //   {/* <Home/> */}
    // </div>


    <div>
      <div className='container-fluid'>
           {/* <p className='bg-danger'>THis is the nAv Bar</p> */}
           <div className='row'>

           <div className='col-12 col-md-4 col-lg-6 bg-danger' >1</div>

           <div className='col-12 col-md-4 col-lg-6 bg-primary'>2</div>
           
           <div className='col-12 col-md-4 col-lg-12 bg-success' >3</div>
          
           {/* <div>5</div>
           <div>6</div> */}
           </div>
        </div>
    </div>
  );
}
export default App;