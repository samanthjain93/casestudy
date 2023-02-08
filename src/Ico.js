import React from 'react'
import{ Link } from 'react-router-dom'
import './Ico.css'

export default function Ico() {
  return (
    <div className='navbar'>
      <ul>
        <Link to='/home'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/register'><li>Registers</li></Link>
        
      </ul>
    </div>
  )
}

