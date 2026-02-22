import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets.js';
import '../index.css';
import FormatArray from '../logic/FormatArray.jsx';
import { removeFromCompare, clearCompare, getComparePhones } from '../logic/CompareLogic.jsx';

function Comparisons() {
  const [phones, setPhones] = useState([]);

  const handleClear = () => {
    clearCompare();
    setPhones([]);
  };

  const handleRemove = (id) => {
    removeFromCompare(id);
    setPhones(prev => prev.filter(p => p !== id));
  };

  useEffect(() => {
    document.title = 'Comparisons';
  }, []);

  useEffect(() => {
    const load = () => setPhones(getComparePhones());
    load();
    window.addEventListener("compareUpdated", load);
    return () => window.removeEventListener("compareUpdated", load);
  }, []);

  const phoneData = phones.filter(id => assets[id]).map(id => ({ ...assets[id], id }));

  if (phoneData.length === 0) {
    return <p className='noPhones'>No phones selected.</p>;
  }

  return (
    <div className="comparisonInsides">
      <div className='comparisonTableLayout'>
        <button onClick={handleClear}>Clear All</button>
        <div className='tableScroll'>
          <table className="comparisonTable">
            <thead>
              <tr>
                <th></th>
                <th></th>
                {phoneData.map(phone => (
                  <th key={phone.id}>
                    {phone.name}
                    <br />
                    <button onClick={() => handleRemove(phone.id)}>✕</button>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope='row'>PLATFORM</th>
                <th>OS</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.OS}</td>)}
              </tr>

              <tr>
                <th rowSpan='2' scope='row'>BODY</th>
                <th>Dimensions</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.body.dimensions}</td>)}
              </tr>

              <tr>
                <th>Weight</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.body.weight}</td>)}
              </tr>
                
              <tr>
                <th rowSpan='4' scope='row'>DISPLAY</th>
                <th>Screen Size</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.display.screenSizeIN}"</td>)}
              </tr>

              <tr>
                <th>Display Type</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.display.panel}</td>)}
              </tr>

              <tr>
                <th>Resolution</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.display.resolution}</td>)}
              </tr>

              <tr>
                <th>Refresh Rate</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.display.refreshRate} Hz</td>)}
              </tr>

              <tr>
                <th rowSpan='5' scope='row'>PERFORMANCE</th>
                <th>Chipset</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.performance.CPU}</td>)}
              </tr>

              <tr>
                <th>CPU</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.performance.CPUdetails}</td>)}
              </tr>

              <tr>
                <th>GPU</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.performance.GPU}</td>)}
              </tr>

              <tr>
                <th>RAM</th>
                {phoneData.map(phone => (
                  <td key={phone.id}>
                    {FormatArray("ram", phone.performance.ram)}
                  </td>
                ))}
              </tr>

              <tr>
                <th>Storage</th>
                {phoneData.map(phone => (
                  <td key={phone.id}>
                    {FormatArray("storage", phone.performance.storageGB)}
                  </td>
                ))}
              </tr>

              <tr>
                <th rowSpan='2' scope='row'>BATTERY</th>
                <th>Battery Capacity</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.battery.capacityMah} mAh</td>)}
              </tr>

              <tr>
                <th>Charging Speed</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.battery.chargingSpeedW} W</td>)}
              </tr>

              <tr>
                <th rowSpan='2' scope='row'>CAMERA</th>
                <th>Rear Camera</th>
                {phoneData.map(phone => <td key={phone.id}>{FormatArray("camera", phone.camera.rearCamerasMP)}</td>)}
              </tr>

              <tr>
                <th>Selfie Camera</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.camera.selfieCamMP ? FormatArray("camera", [].concat(phone.camera.selfieCamMP)): "None"}</td>)}
              </tr>

              <tr>
                <th rowSpan='3' scope='row'>CONNECTIVITY</th>
                <th>Bluetooth</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.connectivity.bluetoothVersion}</td>)}
              </tr>

              <tr>
                <th>Port type</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.connectivity.portType}</td>)}
              </tr>

              <tr>
                <th>Headphone Jack</th>
                {phoneData.map(phone => <td key={phone.id}>{phone.connectivity.headphoneJack ? "Yes" : "No"}</td>)}
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Comparisons;