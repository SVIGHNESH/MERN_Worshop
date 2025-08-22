import {useEffect, useState} from 'react';

// import Home from './Home'

function App(){
  const [login,setLogin] = useState(false);
  const [dark,setDark] = useState(false);
  useEffect(()=>{
      setLogin(localStorage.getItem("login"))
      console.log(login,"from useEffect");
  })
  
  
  const loogin =()=>{
    localStorage.setItem("login",true);
   
    setLogin(localStorage.getItem("login"))
          console.log(login,"Inside The Login Function ");

  }

  const loogout =()=>{
      localStorage.getItem("login",false);
      setLogin(localStorage.getItem("login"))
     console.log(login,"Inside the Logout Function ");
  }
  return(
    <div>
      <button style={{background: dark?"black":"blue"}} onClick={loogin}>Login</button>
      <button onClick={loogout}>Logout</button>
      {/* <Home/> */}
    </div>
  );
}
export default App;