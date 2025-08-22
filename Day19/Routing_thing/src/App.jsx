// import {useEffect, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './custom.scss'
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
           <div className='row bg-dark'>

           <div className='col-6 col-md-6 col-lg-6 bg-primary' >1</div>

           <div className='col-6 col-md-3 col-lg-6 bg-primary'>2</div>

           <div className='col-6 col-md-3 col-lg-12 bg-primary-100' >3</div>
           <div className='col-6 col-md-3 col-lg-12 bg-warning-500' >4</div>
          
           {/* <div>5</div>
           <div>6</div> */}
           </div>
        </div>
    </div>
  );
}
export default App;