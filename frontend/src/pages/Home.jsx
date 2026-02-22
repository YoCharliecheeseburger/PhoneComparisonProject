import React, { useState, useCallback, useEffect } from 'react';
import FilterMenu from '../components/FilterMenu.jsx';
import ComparePopup from '../components/ComparePopup';
import PhoneDisplayHomepg from '../components/PhoneDisplayHomepg.jsx';
import { assets } from '../assets/assets.js';

function Home() {
  const [filteredIds, setFilteredIds] = useState(Object.keys(assets));
  const handleFilter = useCallback((ids) => setFilteredIds(ids), []);

  useEffect(() => {
      document.title = 'Home';
    }, []);

  return (
    <div className='homeInsides'>
      <FilterMenu onFilter={handleFilter} count={filteredIds.length} />
      <ComparePopup />
      {filteredIds.length === 0 ? (
        <p className='noPhones'>No phones selected.</p>
      ) : (
        <div className='phoneList'>
          <div className='phoneListLayoutHome'>
            {filteredIds.map(id => <PhoneDisplayHomepg phone={assets[id]} key={id} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;