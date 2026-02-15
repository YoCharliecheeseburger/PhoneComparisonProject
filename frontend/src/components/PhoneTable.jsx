import React from 'react'

const PhoneTable = ({ phone }) => {

  const formatArray = (key, arr) => {
    switch (key) {
      case "camera":
        return arr.map(number => `${number} MP`).join(" + ")

      case "ram":
        return arr.map(number => (number >= 512 ? `${number} MB` : `${number} GB`)).join(" / ")

      case "storage":
        return arr.map(number => `${number} GB`).join(" / ")

      default:
        return arr.join(" / ")
    }
  }


  return (
    <div className="phoneStylingPhones">

      <div className="leftImg">
        <div className="phoneImagePhones">
          <img src={phone.image} alt={phone.name}/>
        </div>
      </div>

      <div className="rightDesc">
        <div className='phoneTopSection'>
          <h1>{phone.name}</h1><div className="compareButtonPlacement"><button className='compareButton'>Compare</button></div>
          
        </div>
        <div className='phoneSpecs'>
          <p>OS: {phone.OS}</p>
          <div className='specBlock'>
            <h3>Body</h3>
            <p>Dimensions: {phone.body.dimensions}</p>
            <p>Weight: {phone.body.weight}</p>
          </div>

          <div className='specBlock'>
            <h3>Display</h3>
            <p>Screen Size: {phone.display.screenSizeIN}"</p>
            <p>Panel: {phone.display.panel}</p>
            <p>Resolution: {phone.display.resolution}</p>
            <p>Refresh Rate: {phone.display.refreshRate} Hz</p>
          </div>

          <div className='specBlock'>
            <h3>Performance</h3>
            <p>CPU: {phone.performance.CPU}</p>
            <p>GPU: {phone.performance.GPU}</p>
            <p>RAM: {formatArray("ram", phone.performance.ram)}</p>
            <p>Storage: {formatArray("storage", phone.performance.storageGB)}</p>
          </div>
          
        
          <div className='specBlock'>
            <h3>Battery</h3>
            <p>Capacity: {phone.battery.capacityMah} mAh</p>
            <p>Charging Speed: {phone.battery.chargingSpeedW} W</p>
          </div>

          <div className='specBlock'>
            <h3>Camera</h3>
            <p>
              Selfie: {Array.isArray(phone.camera.selfieCamMP) 
                ? formatArray("camera", phone.camera.selfieCamMP) 
                : (phone.camera.selfieCamMP ? `${phone.camera.selfieCamMP} MP` : "None")}
            </p>
            <p>Rear: {formatArray("camera", phone.camera.rearCamerasMP)}</p>
          </div>

          <div className='specBlock'>
            <h3>Connectivity</h3>
            <p>Bluetooth Version: {phone.connectivity.bluetoothVersion}</p>
            <p>Port Type: {phone.connectivity.portType}</p>
            <p>Headphone Jack: {phone.connectivity.headphoneJack ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneTable
