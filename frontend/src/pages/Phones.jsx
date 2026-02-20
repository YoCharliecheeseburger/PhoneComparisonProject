import { useParams } from 'react-router-dom'
import PhoneTable from '../components/PhoneTable.jsx'
import ComparePopup from '../components/ComparePopup';
import { assets } from '../assets/assets.js'
import '../index.css'

function Phones() {
  const { id } = useParams()
  const phone = assets[id]

  return (
    <div className="phoneInsides">
      <PhoneTable phone={phone} />
      <ComparePopup />
    </div>
  )
}

export default Phones
