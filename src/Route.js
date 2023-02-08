import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import Login from './Login'
import Table from './Table'


function Sample() {
  return (
    
    
        <BrowserRouter>
        <div>
        <Navbar bg="light" expand="lg">
        <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#table">Link</Nav.Link>
            </Navbar>
        </div>
        <div>
        <Routes>
            <Route path="./home" element={<Login />}/>
            <Route path="./link" element={<Table />}/>
            
        </Routes>
        
    </div>
    </BrowserRouter>
  )
}

export default Route