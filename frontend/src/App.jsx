import './index.css'
import Navbar from './components/Navbar.jsx'
import React from 'react'
import Header from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Comparisons from './pages/Comparisons'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Comparisons />}/>
      </Routes>
    </Router>
  )
}

export default App