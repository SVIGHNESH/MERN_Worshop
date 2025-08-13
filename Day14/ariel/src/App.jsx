import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx'
function App() {
  let data = "hello";
  let data1 = "hiii";
  let data2 = "hiii";

  return(
    <div>
      <Navbar />
      <br/>
      <Main  main ={data} name2 ={data1} name3 = {data2}/> 
      <Footer /> 
    </div>
  );
}
export default App;