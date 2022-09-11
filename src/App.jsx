import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Tickets from './pages/Tickets'

// components
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
