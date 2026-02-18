import React from 'react'
import FilterMenu from '../components/FilterMenu.jsx'
import ComparePopup from '../components/ComparePopup';
import PhoneDisplayHomepg from '../components/PhoneDisplayHomepg.jsx'
import { assets } from '../assets/assets.js'

function Home() {
  return (
    <div className='homeInsides'>
      <div className='filterPos'>
        <FilterMenu />
      </div>
      <ComparePopup />
      <div className='phoneList'>
        <div className='phoneListLayoutHome'>
          {Object.entries(assets).map(([key, value]) =><PhoneDisplayHomepg phone={value} key={key}/>)}
        </div>
      </div>
    </div>
  )
}

export default Home