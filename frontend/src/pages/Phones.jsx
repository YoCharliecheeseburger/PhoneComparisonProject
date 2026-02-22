import { useParams } from 'react-router-dom'
import { useEffect } from "react";
import PhoneTable from '../components/PhoneTable.jsx'
import ComparePopup from '../components/ComparePopup';
import { assets } from '../assets/assets.js'
import '../index.css'

function Phones() {
  const { id } = useParams()
  const phone = assets[id]

  useEffect(() => {
    document.title = phone?.name ? phone.name : 'Phone'
  }, [phone?.name])

  if (!phone) {
    return <div className='phoneInsides'>Phone not found.</div>
  }

  return (
    <div className="phoneInsides">
      <PhoneTable phone={phone} />
      <ComparePopup />
    </div>
  )
}

export default Phones