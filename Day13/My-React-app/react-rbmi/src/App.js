import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js'

function App() {
  const hi = false
  return (
    <div className="App">

      {hi ? <h1>Hi is True</h1> : <h1>Hi is False</h1>}
      
  
    </div>
  
  );
}

export default App;
