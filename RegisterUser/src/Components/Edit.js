import React, { useState, useEffect, } from 'react'
import { useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';

function Edit() {
    const param = useParams();
    const[id, setId]= useState(param.id);
    const[name, setName] = useState("");
    //const host = process.env.REACT_APP_HOST||"localhost";
    
    const [password, setPassword]= useState("");
    const navigate= useNavigate();
   

    const handleChange=(e)=>{
        setName(e.target.value);
      }
      useEffect(() => {
        //http://localhost:8080/test/users
        //axios.get("https://6629c5a967df268010a18ed6.mockapi.io/api/v1/user/"+id)
        //axios.get(`http://${host}:8080/test/user/`+id)
        axios.get(`/test/user/`+id)
        .then((response) => {
          const userData = response.data;
          setId(userData.id);
          setName(userData.name);
          setPassword(userData.password);
         // console.log(" ip: "+`${host}`);      
        }).catch(error => {
          alert("Error Ocurred getting employee detail:"+ error);
        });
      }, []);

      const handleClick=(e)=>{
        e.preventDefault();
        console.log(name+" "+password);
        //axios.put("https://6629c5a967df268010a18ed6.mockapi.io/api/v1/user/"+id,{name:name, password:password})
        //axios.put(`http://${host}:8080/test/user/`+id,{name:name, password:password})
        axios.put(`/test/user/`+id,{name:name, password:password})
        .then((response)=>{
          console.log(response);
          alert("User update done!");
          navigate("/allusers");
        })
        .catch(error=>{
          alert("Error occured while updating an existing record: "+ error)
        })
      }
    return (
        <form>
        <label>Name:
        <input type='text' value={name} onChange={handleChange}/>
        </label><br/>
        <label>Password:
        <input type='password' value={password} autoComplete='false' onChange={(e)=>setPassword(e.target.value)}/>
        </label><br/>
        <button type="submit" onClick={handleClick}>Update</button>

      </form>
    )
}

export default Edit
