import {BrowserRouter, Route } from 'react-router-dom';
import {useState} from 'react';
import Home from './Home.jsx';
import Navbar from './Navbar';
function App() {

  const [login,setLogin] = useState(false);
  return(
  <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/'  element={<Home></Home>}/>

          <Route path ='/navbar' element={Navbar}/>
        </Routes>


      </BrowserRouter>

      <button onClick={()=> setLogin(true)}>
        Login
      </button>
  </div>
  );
  
}

export default App
