import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Register1() {
  let history = useNavigate();
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState("");

  let submit = async () => {
    let register = { fname, lname, email, password, role };
    let res = await axios.post(
      "https://products-jwt.onrender.com/users/register",
      register
    );
    let data = JSON.stringify(res);
    localStorage.setItem("user-info", data);
    history("/home");
  };

  return (
    <div class="btn">
      <label>username</label>
      <input
        type="text"
        value={fname}
        onChange={(e) => setfname(e.target.value)}
      ></input>
      <br></br>
      <label>lastname</label>
      <input
        type="text"
        value={lname}
        onChange={(e) => setlname(e.target.value)}
      ></input>
      <br></br>
      <label>email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br></br>
      <label>password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>
      <label>role</label>
      <input
        type="password"
        value={role}
        onChange={(e) => setrole(e.target.value)}
      ></input>
      <br></br>
      <Button class="btn btn-primary" onClick={submit}>
        submit
      </Button>
    </div>
  );
}

export default Register1;
