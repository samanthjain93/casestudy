import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Ico from '../src/Ico'
import About from '../src/About'
import Modal from '../src/Modal'
import Register from '../src/Register'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Ico />
      <Routes>
        <Route path='/home' element={<Modal />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App