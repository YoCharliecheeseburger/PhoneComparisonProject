import './index.css'
import Navbar from './components/Navbar.jsx'
import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Comparisons from './pages/Comparisons'
import FilterMenu from './components/FilterMenu.jsx';
import Phones from './pages/Phones'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/phones' element={<Phones />} />
        <Route path='/phones/:id' element={<Phones />} />
        <Route path='/comparisons' element={<Comparisons />} />
      </Routes>
    </Router>
    
  )
}

export default App