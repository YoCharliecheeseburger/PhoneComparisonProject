import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <h1 className="navbarTitle">SillyPhoneComparing.com</h1>
      </div>

      <div className="center">
        <NavLink to="/">Home</NavLink>
      </div>

      <div className="right">
        <NavLink to="/Comparisons">Comparison List</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
