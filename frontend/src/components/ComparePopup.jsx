import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { removeFromCompare, clearCompare, getComparePhones } from '../logic/CompareLogic.jsx'

function ComparePopup() {
  const [phones, setPhones] = useState([])
  const [isCollapsed, setIsCollapsed] = useState(false)
  const navigate = useNavigate()

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev)
  }

  useEffect(() => {
    const loadPhones = () => {
      const validPhones = getComparePhones().filter(id => assets[id])
      setPhones(validPhones)
    }

    loadPhones()
    window.addEventListener('compareUpdated', loadPhones)

    return () => {
      window.removeEventListener('compareUpdated', loadPhones)
    }
  }, [])

  const handleRemove = (id) => {
    removeFromCompare(id)
    setPhones(prev => prev.filter(p => p !== id))
  }

  const handleClear = () => {
    clearCompare()
    setPhones([])
    setIsCollapsed(false)
  }

  const goToCompare = () => {
    if (phones.length < 2) {
      alert('Select at least 2 phones to compare')
      return
    }
    navigate('/comparisons')
  }

  if (phones.length === 0) return null

  return (
    <div className={`ComparePopupStyle ${isCollapsed ? 'collapsed' : ''}`}>
      
      <div className="collapseArrow" onClick={toggleCollapse}>
        {isCollapsed ? '>' : '<'}
      </div>

      <div className='comparePhones'>
        {phones.map(id => {
          const phone = assets[id]
          if (!phone) return null

          return (
            <div className='popUpContent' key={id}>
              <div className='popupImage'>
                <img src={phone.image} alt={phone.name} />
                <button onClick={() => handleRemove(id)}>✕</button>
              </div>
              <p>{phone.name}</p>
            </div>
          )
        })}
      </div>

      <div className='popupButtons'>
        <button id='popupClearButton' onClick={handleClear}>Clear</button>
        <button id='popupCompareButton' onClick={goToCompare}>Compare</button>
      </div>
    </div>
  )
}

export default ComparePopup