import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets.js';

const allRamGB = Object.values(assets).flatMap(p =>
  (p.performance.ram || []).filter(r => r > 0).map(ram => ram >= 512 ? ram / 1024 : ram)
);

const allStorage = Array.from(
  new Set(Object.values(assets).flatMap(p => p.performance.storageGB || []))
).filter(v => v > 0).sort((a, b) => a - b);

const allRamOptions = Array.from(new Set(allRamGB)).sort((a, b) => a - b);
const minBattery = Math.min(...Object.values(assets).map(p => Number(p.battery.capacityMah)).filter(v => v > 0));
const maxBattery = Math.max(...Object.values(assets).map(p => Number(p.battery.capacityMah)).filter(v => v > 0));
const minScreen = Math.min(...Object.values(assets).map(p => Number(p.display.screenSizeIN)).filter(v => v > 0));
const maxScreen = Math.max(...Object.values(assets).map(p => Number(p.display.screenSizeIN)).filter(v => v > 0));
const allBluetooth = Object.values(assets).map(p => Number(p.connectivity.bluetoothVersion)).filter(v => v > 0);
const minBluetooth = Math.min(...allBluetooth);
const maxBluetooth = Math.max(...allBluetooth);
const brands = Array.from(new Set(Object.values(assets).map(phone => phone.name.split(' ')[0])));

const getFilteredKeys = (filters) => {
  return Object.entries(assets)
    .filter(([_, phone]) => {
      const phoneRam = Math.max(...(phone.performance.ram || []).filter(r => r > 0).map(r => r >= 512 ? r / 1024 : r));
      const phoneStorageOptions = (phone.performance.storageGB || []).map(Number);
      const phoneBattery = Number(phone.battery.capacityMah) || 0;
      const phoneScreen = Number(phone.display.screenSizeIN) || 0;

      if (filters.brand && !phone.name.startsWith(filters.brand)) return false;
      if (filters.ram.length > 0 && !filters.ram.some(r => Math.abs(phoneRam - r) < 0.01)) return false;
      if (filters.storage.length > 0 && !filters.storage.some(s => phoneStorageOptions.includes(s))) return false;
      if (phoneBattery < filters.battery[0] || phoneBattery > filters.battery[1]) return false;
      if (phoneScreen < filters.screen[0] || phoneScreen > filters.screen[1]) return false;
      if (phone.connectivity.bluetoothVersion < filters.bluetooth[0] || phone.connectivity.bluetoothVersion > filters.bluetooth[1]) return false;

      return true;
    })
    .map(([key]) => key);
};

const defaultFilters = {
  brand: '',
  ram: [],
  storage: [],
  battery: [minBattery, maxBattery],
  screen: [minScreen, maxScreen],
  bluetooth: [minBluetooth, maxBluetooth],
};

function FilterMenu({ onFilter, count }) {
  const [filters, setFilters] = useState(defaultFilters);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleRange = (name, index, value) => {
    setFilters(prev => {
      const newRange = [...prev[name]];
      newRange[index] = Number(value);
      if (index === 0 && newRange[0] > newRange[1]) newRange[0] = newRange[1];
      if (index === 1 && newRange[1] < newRange[0]) newRange[1] = newRange[0];
      return { ...prev, [name]: newRange };
    });
  };

  const handleCheckbox = (name, value) => {
    const numValue = Number(value);
    setFilters(prev => {
      const current = prev[name];
      const updated = current.includes(numValue)
        ? current.filter(v => v !== numValue)
        : [...current, numValue];
      return { ...prev, [name]: updated };
    });
  };

  const resetFilters = () => setFilters(defaultFilters);

  useEffect(() => {
    onFilter(getFilteredKeys(filters));
  }, [filters, onFilter]);

  /*what the fuck are filters honestly */

  return (
    <div className="filterPos">
      <div className="filterMenu">
        <div className="filterMenuContent">

          <div>
            <label>Brand:</label>
            <select name="brand" value={filters.brand} onChange={handleChange}>
              <option value="">All</option>
              {brands.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          <div>
            <label>RAM (GB):</label>
            <div className="storageGrid">
              {allRamOptions.map(r => (
                <label key={r} className="storageItem">
                  <input type="checkbox" value={r} checked={filters.ram.includes(Number(r))} onChange={() => handleCheckbox('ram', r)} />
                  {r}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label>Storage (GB):</label>
            <div className="storageGrid">
              {allStorage.map(s => (
                <label key={s} className="storageItem">
                  <input type="checkbox" value={s} checked={filters.storage.includes(Number(s))} onChange={() => handleCheckbox('storage', s)}/>
                  {s}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label>Battery (mAh): {filters.battery[0]} - {filters.battery[1]}</label>
            <div className="rangeSlider">
              <input className='minRange' type="range" min={minBattery} max={maxBattery} value={filters.battery[0]} onChange={e => handleRange('battery', 0, e.target.value)}/>
              <input className='maxRange' type="range" min={minBattery} max={maxBattery} value={filters.battery[1]} onChange={e => handleRange('battery', 1, e.target.value)}/>
            </div>
          </div>

          <div>
            <label>Screen (inches): {filters.screen[0].toFixed(1)} - {filters.screen[1].toFixed(1)}</label>
            <div className="rangeSlider">
              <input className='minRange' type="range" step="0.1" min={minScreen} max={maxScreen} value={filters.screen[0]} onChange={e => handleRange('screen', 0, e.target.value)}/>
              <input className='maxRange' type="range" step="0.1" min={minScreen} max={maxScreen} value={filters.screen[1]} onChange={e => handleRange('screen', 1, e.target.value)}/>
            </div>
          </div>

          <div className='bluetoothSlider'>
            <label>Bluetooth Version: {filters.bluetooth[0].toFixed(1)} - {filters.bluetooth[1].toFixed(1)}</label>
            <div className="rangeSlider">
              <input className='minRange' type="range" step="0.1" min={minBluetooth} max={maxBluetooth} value={filters.bluetooth[0]} onChange={e => handleRange('bluetooth', 0, e.target.value)}/>
              <input className='maxRange' type="range" step="0.1" min={minBluetooth} max={maxBluetooth} value={filters.bluetooth[1]} onChange={e => handleRange('bluetooth', 1, e.target.value)}/>
            </div>
          </div>

          <div className="filterCount">
            <p>{count} phone{count !== 1 ? 's' : ''} found</p>
          </div>

          <button onClick={resetFilters}>Reset Filters</button>

        </div>
      </div>
    </div>
  );
}

export default FilterMenu;