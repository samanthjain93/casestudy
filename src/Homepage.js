import React from 'react'

import Nav from 'react-bootstrap/Nav';

import { BrowserRouter, Link, Routes,Route } from 'react-router-dom';
import Login from './Login';
import Table from './Table';
import Register1 from './Register1'
import '../src/Login.css'

function Homepage() {
  return (
    <BrowserRouter>
    <div className='mani'>
        {/* <Navbar bg="primary" expand="lg"> */}
      
      
        <ul>
     <li><Nav.Link   as={Link} to="/register1">Register</Nav.Link></li>
      <li><Nav.Link   as={Link} to="/home">Login</Nav.Link></li>
      <li><Nav.Link  as={Link} to="/link">Table</Nav.Link></li>
      </ul>
    
    
    {/* </Navbar> */}
    </div>
  <div>
    <Routes>
        <Route path="/register1" element={<Register1/>}/>
        <Route path="/home" element={<Login/>}/>
        <Route path="/link" element={<Table/>}/>
    </Routes>
  </div>

    </BrowserRouter>
  )
}

export default Homepage