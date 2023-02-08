import axios from 'axios';
import React,{useState} from 'react'
import {Button} from 'react-bootstrap'
import'./Login.css'
import {useNavigate} from 'react-router-dom'


function Login() {
    let history= useNavigate();
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    


    
       
 
    
    let submit=async()=>{
        let login={email,password}
        let res=await axios.post("https://products-jwt.onrender.com/users/login",login)
        let data=JSON.stringify(res)
        localStorage.setItem("user-info",data)
        history('/link')
       
    }
    
    
  return (
    <div class="btn">
        <label>username</label>
        <input type="text" value={email} onChange={(e)=>setUsername(e.target.value)}></input><br></br>
        <label>password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
        <Button class="btn btn-primary" onClick={submit}>submit</Button>
    </div>
  )
}

export default Login