import './index.css'
import Navbar from './components/Navbar.jsx'
import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Comparisons from './pages/Comparisons'
import FilterMenu from './components/FilterMenu.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/comparisons' element={<Comparisons />}/>
      </Routes>
    </Router>
    
  )
}

export default App