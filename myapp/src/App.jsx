import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Count from './components/Count'
import Api from './components/Api'
import Pokemon from './components/Pokemon'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar /><br /><br /><br /><br />
      <Routes>
        <Route path="/l" element={<Login />} />
        <Route path="/s" element={<Signup />} />
        <Route path="/state" element={<Statebasics />} />
        <Route path="/c" element={<Count />} />
        <Route path="/a" element={<Api />} />
        <Route path="/p" element={ <Pokemon/>} />
        
      </Routes>
 </>
  
  )
}

export default App
