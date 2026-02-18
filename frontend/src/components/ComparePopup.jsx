import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

function ComparePopup() {
  const [phones, setPhones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPhones = () => {
      const stored = JSON.parse(localStorage.getItem("comparePhones")) || [];
      setPhones(stored);
    };

    loadPhones();
    window.addEventListener("compareUpdated", loadPhones);

    return () => {
      window.removeEventListener("compareUpdated", loadPhones);
    };
  }, []);

  const removePhone = (id) => {
    const updated = phones.filter(p => p !== id);
    localStorage.setItem("comparePhones", JSON.stringify(updated));
    setPhones(updated);
    window.dispatchEvent(new Event("compareUpdated"));
  };

  const clearAll = () => {
    localStorage.removeItem("comparePhones");
    setPhones([]);
    window.dispatchEvent(new Event("compareUpdated"));
  };

  const goToCompare = () => {
    if (phones.length < 2) {
      alert("Select at least 2 phones to compare");
      return;
    }
    navigate("/comparisons");
  };

  if (phones.length === 0) return null;

  return (
    <div className='ComparePopupStyle'>
      <div className='comparePhones'>
        {phones.map(id => (
          <div className='comparePhoneCard' key={id}>
            <div className="imageWrapper">
              <img src={assets[id].image} alt={assets[id].name} />
              <button onClick={() => removePhone(id)}>✕</button>
            </div>
            <p>{assets[id].name}</p>
          </div>
        ))}
      </div>

      <div className='popupButtons'>
        <button id='popupClearButton' onClick={clearAll}>Clear</button>
        <button id='popupCompareButton' onClick={goToCompare}>Compare</button>
      </div>
    </div>
  )
}

export default ComparePopup
