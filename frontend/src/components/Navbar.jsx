import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='test'>
      <h1 className='name'>SillyComparing.com</h1>
      <NavLink to='/'>
        <p>Home</p>
      </NavLink>
      <NavLink to='/Comparisons'>
        <p>Compare</p>
      </NavLink>
    </div>
  )
}

export default Navbar