import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import PhoneTable from '../components/PhoneTable.jsx'
import { assets } from '../assets/assets.js'
import '../index.css'

function Phones() {
  const { id } = useParams()
  const phone = assets[id]

  return (
    <div className="phoneInsides">
      <div className='phoneLayoutPhones'>
        <PhoneTable phone={phone} />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Phones
