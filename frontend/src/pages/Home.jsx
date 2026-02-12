import React from 'react'
import FilterMenu from '../components/FilterMenu.jsx'
import Footer from '../components/Footer.jsx'
import ShowPhone from '../components/ShowPhone.jsx'
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
          <div className='phoneListLayout'>
            {Object.entries(assets).map(([key, value]) => <ShowPhone phone={value} key={key}/>)}
          </div>
        </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
    
  )
}

export default home