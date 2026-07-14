import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addteam from './components/Addteam'
import ViewTeam from './components/ViewTeam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Addteam />} />
      <Route path="/view" element={<ViewTeam/>} />


      </Routes>
      
      
      
      </BrowserRouter>
    </>
  )
}

export default App
