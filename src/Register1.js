import axios from "axios";
import React, { useState } from "react";

import "../src/Login.css";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";

function Register1() {
  let history = useNavigate();
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState("");



  let submit = async () => {
    
    let register = { fname, lname, email, password, role };
    try{
    let res = await axios.post(
      "https://products-jwt.onrender.com/users/register",
      register
    );
    let data = JSON.stringify(res);
    localStorage.setItem("user-info", data);
    history("/home");
  }

  catch (error){
     alert(error.message);
  };
  }
  return (
    <div class="btn">
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
          label="Firstname"
          onChange={(e) => setfname(e.target.value)}
          value={fname}
        /> <br></br>
        <TextField
          required
          id="outlined-required"
          label="Lastname"
          onChange={(e) => setlname(e.target.value)}
          value={lname}
        /> <br></br>
        <TextField
          required
          id="outlined-required"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        /> <br></br>
        <TextField
          required
          id="outlined-required"
          label="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        /> <br></br>
        <TextField
          required
          id="outlined-required"
          label="Role"
          onChange={(e) => setrole(e.target.value)}
          value={role}
        /> <br></br>
      </Box>
      
      
      
     
      <br></br>

      <Button variant="contained" onClick={submit}>submit</Button>
      
    </div>
  );
}

export default Register1;
