import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Create() {
  const navigate = useNavigate();
  //const [id, setId] = useState(0);
  const host = process.env.REACT_APP_HOST||"localhost";
  //const host = window.__RUNTIME_CONFIG__.REACT_APP_HOST||"localhost"; 
  const [name,setName]= useState("");
  const [password,setPassword]= useState("");
  const handleClick=(e)=>{
    e.preventDefault();
    console.log(name+" "+password+" ip: "+{host});
    //axios.post(`http://${host}:8080/test/user`,{name:name, password:password}, {headers: {'Content-Type': 'application/json','Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    //axios.post(`/test/user`,{name:name, password:password}, {headers: {'Content-Type': 'application/json','Authorization': 'Bearer YOUR_ACCESS_TOKEN', 'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET' 
    axios.post(`/test/user`,{name:name, password:password}, {headers: {'Content-Type': 'application/json', 
  }})
    .then((response)=>{
      console.log(response);
      navigate("/");
    })
    .catch(error=>{
      alert("Error occured while creating a new record: "+ error)
    })
  }

  const handleChange=(e)=>{
    setName(e.target.value);
  }

    return (
      <div className="App">
      <form>
        <label>Name:
        <input type='text' onChange={handleChange}/>
        </label><br/>
        <label>Password:
        <input type='password' autoComplete='false' onChange={(e)=>setPassword(e.target.value)}/>
        </label><br/>
        <button type="submit" onClick={handleClick}>Submit</button>

      </form>
    </div>
    )
}

export default Create;
/*
Using axios lib to call fake api: https://6629c5a967df268010a18ed6.mockapi.io/api/v1/user
Steps: 
1. Create an account on mockapi.io.
2. Create an endpoint
3. Create data using "Generate All"
4. Use "data"  to see the data or click on the link.

Create: post
retrieve: get
modify: update
delete: delete
*/

