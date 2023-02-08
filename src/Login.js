import axios from 'axios';
import React,{useState} from 'react'
import { Card, Container, Form} from 'react-bootstrap'
import'../src/Login.css'
import {useNavigate} from 'react-router-dom'
import { Box, Button, TextField } from '@mui/material';



function Login() {
    let history= useNavigate();
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    


    
       
 
    
    let submit=async()=>{
        let login={email,password}
        try{
        let res=await axios.post("https://products-jwt.onrender.com/users/login",login)
        let data=JSON.stringify(res)
        localStorage.setItem("user-info",data)
        history('/link')
      }
      catch(error){
        alert(error.message)
      }
    }
    
    
  return (
    <>
    <Container style={{minHeight:"100vh"}}>
    <div className='w-100' style={{maxWith:"400px"}}>
      <center>
      <Card className='card'>
        <Card.Body>
      <Form className='formbtn'>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          required
          id="outlined-required"
          label="Email"
          onChange={(e) =>setUsername(e.target.value)}
          value={email}
        /> <br></br>
        <TextField
          required
          id="outlined-required"
          label="Password"
          onChange={(e) =>setPassword(e.target.value)}
          value={password}
        /> <br></br>
        </Box>
        
        <Button variant="contained" onClick={submit}>submit</Button>

        
        </Form>
        </Card.Body>
        </Card>
        </center>
    </div>
    </Container>
    </>
  )
}

export default Login