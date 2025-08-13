import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js'

function App() {
  const hi = true
  const styles ={
    "color": "blue",
    "background-color" : "yellow"
  }
  const cssOfH3 = {
    "border" :"solid 1px black",
    "background-color":"blue"
  }
  return (
    <div className="App">

      <h1  style={styles}>Hi is True</h1>
      <h1 style = {{"color" : "red"}}>Hi is False</h1>
      <h3 style ={cssOfH3}>This is the one of the man of the america</h3>
  
    </div>
  
  );
}

export default App;
