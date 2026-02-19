import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets.js'

function ComparePopup() {
  const [phones, setPhones] = useState([])
  const [isCollapsed, setIsCollapsed] = useState(false)
  const navigate = useNavigate()

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev)
  }

  useEffect(() => {
    const loadPhones = () => {
      const stored = JSON.parse(localStorage.getItem('comparePhones')) || []

      const validPhones = stored.filter(id => assets[id])
      
      setPhones(validPhones)
    }

    loadPhones()
    window.addEventListener('compareUpdated', loadPhones)

    return () => {
      window.removeEventListener('compareUpdated', loadPhones)
    }
  }, [])

  const removePhone = (id) => {
    const updated = phones.filter(p => p !== id)
    localStorage.setItem('comparePhones', JSON.stringify(updated))
    setPhones(updated)
    window.dispatchEvent(new Event('compareUpdated'))
  }

  const clearAll = () => {
    localStorage.removeItem('comparePhones')
    setPhones([])
    window.dispatchEvent(new Event('compareUpdated'))
  }

  const goToCompare = () => {
    if (phones.length < 2) {
      alert('Select at least 2 phones to compare')
      return
    }
    navigate('/comparisons')
  }

  if (phones.length === 0 && !isCollapsed) return null

  return (
    <div className={`ComparePopupStyle ${isCollapsed ? 'collapsed' : ''}`}>
      
      <div className="collapseArrow" onClick={toggleCollapse}>
        {isCollapsed ? '>' : '<'}
      </div>

      {!isCollapsed && (
        <>
          <div className='comparePhones'>
            {phones.map(id => {
              const phone = assets[id]
              if (!phone) return null

              return (
                <div className='comparePhoneCard' key={id}>
                  <div className='imageWrapper'>
                    <img src={phone.image} alt={phone.name} />
                    <button onClick={() => removePhone(id)}>✕</button>
                  </div>
                  <p>{phone.name}</p>
                </div>
              )
            })}
          </div>

          <div className='popupButtons'>
            <button id='popupClearButton' onClick={clearAll}>Clear</button>
            <button id='popupCompareButton' onClick={goToCompare}>Compare</button>
          </div>
        </>
      )}
    </div>
  )
}

export default ComparePopup
