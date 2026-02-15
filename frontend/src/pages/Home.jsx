import React from 'react'
import FilterMenu from '../components/FilterMenu.jsx'
import Footer from '../components/Footer.jsx'
import PhoneDisplayHomepg from '../components/PhoneDisplayHomepg.jsx'
import { assets } from '../assets/assets.js'

function home() {
  return (

    <div className='homeInsides'>
      <div className='filterPos'>
        <div className='filterMenu'>
          <FilterMenu />
        </div>
      </div>
        <div className='phoneList'>
          <div className='phoneListLayoutHome'>
            {Object.entries(assets).map(([key, value]) =><PhoneDisplayHomepg phone={value} key={key}/>)}
          </div>
        </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
    
  )
}

export default home