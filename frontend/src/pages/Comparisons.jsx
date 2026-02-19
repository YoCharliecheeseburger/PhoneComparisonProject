import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets.js';
import '../index.css';

function Comparisons() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("comparePhones")) || [];
    setPhones(stored);
  }, []);

  const removePhone = (id) => {
    const updated = phones.filter(p => p !== id);
    localStorage.setItem("comparePhones", JSON.stringify(updated));
    setPhones(updated);
  };

  const phoneData = phones.map(id => ({ ...assets[id], id }));

  if (phoneData.length === 0) {
    return <p className='noPhones'>No phones selected.</p>;
  }

  const formatArray = (key, arr) => {
    switch (key) {
      case "camera":
        return arr.map(number => `${number} MP`).join(" + ")

      case "ram":
        return arr.map(number => (number >= 512 ? `${number} MB` : `${number} GB`)).join(" / ") //moo
      case "storage":
        return arr.map(number => `${number} GB`).join(" / ")

      default:
        return arr.join(" / ")
    }
  }

  return (
    <div className="comparisonInsides">
      <div className='comparisonTableLayout'>
        <button onClick={() => {localStorage.removeItem("comparePhones"); setPhones([]); }}>Clear All</button>
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
                    <button onClick={() => removePhone(phone.id)}>✕</button>
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
                    {formatArray("ram", phone.performance.ram)}
                  </td>
                ))}
              </tr>

              <tr>
                <th>Storage</th>
                {phoneData.map(phone => (
                  <td key={phone.id}>
                    {formatArray("storage", phone.performance.storageGB)}
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
                {phoneData.map(phone => <td key={phone.id}>{formatArray("camera", phone.camera.rearCamerasMP)}</td>)}
              </tr>

              <tr>
                <th>Selfie Camera</th>
                {phoneData.map(phone => <td key={phone.id}>{Array.isArray(phone.camera.selfieCamMP) ? formatArray("camera", phone.camera.selfieCamMP) : (phone.camera.selfieCamMP ? `${phone.camera.selfieCamMP} MP` : "None")}</td>)}
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
