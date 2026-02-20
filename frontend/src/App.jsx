import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Comparisons from './pages/Comparisons'
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
      <Footer />
    </Router>
  )
}

export default App
