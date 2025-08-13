import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js'

function App() {
  const hi = true
  const styles ={
    "color": "blue",
    "background-color" : "yellow"
  }
  return (
    <div className="App">

      <h1  style={styles}>Hi is True</h1>
      <h1 style = {{"color" : "red"}}>Hi is False</h1>
      
  
    </div>
  
  );
}

export default App;
