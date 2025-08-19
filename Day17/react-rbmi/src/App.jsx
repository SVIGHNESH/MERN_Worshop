import { useState } from 'react'
import axios from 'axios'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [data, setData] = useState(null);
    const[form,setForm] = useState({"name":"","location":""})

let api = "http://localhost:5000/users";

const input_change = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const post_data = (data) => {
  return axios.post(`${api}`, data);
};

const post = async (d) => {
  await post_data(d);
};

const submit = (e) => {
  e.preventDefault();
  console.log(form)
  post(form);
  setForm({ name: "", location: "" });
};
const getData = () => {
    return axios.get(`${api}/${1}`);
  };


  
  
 
  const get = async (id) => {
    
      let data = await getData(id);
      setData(data);
      console.log(data);
    
  };
  const update =()=>{
    let n = data.data;
    setForm({...form,...n})
  }

  
  return(
    <>
       <form onSubmit={submit}>
        <input type="text"  value={form.name} name={'name'}
        onChange={input_change}
        
        />
        <input  type="text" value={form.location} name={'location'}
        onChange={input_change} />
        <input type='submit'/>
       </form>

       <button onClick={update}>Update Data</button>
    </>
  )
}

export default App