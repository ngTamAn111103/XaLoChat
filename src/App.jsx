import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { Login } from './Auth/Login.jsx'
import { Register } from './Auth/Register.jsx'
function App() {


  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
       </Router>
    </>
  )
}

export default App
