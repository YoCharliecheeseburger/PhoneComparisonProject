import FormatArray from '../logic/FormatArray.jsx';
import { addToCompare } from '../logic/CompareLogic.jsx';

const PhoneTable = ({ phone }) => {

  return (
    <div className='phoneLayoutPhones'>
      <div className="phoneStylingPhones">
        <div className="leftImg">
          <div className="phoneImagePhones">
            <img src={phone.image} alt={phone.name}/>
          </div>
        </div>

        <div className="rightDesc">
          <div className='phoneTopSection'>
            <h1>{phone.name}</h1>
            <div className="compareButtonPlacement">
              <button className='compareButton' onClick={() => addToCompare(phone.id)}><p>Compare</p></button>
            </div>
          </div>
          <div className='phoneSpecs'>
            <p>OS: {phone.OS}</p>
            <div className='specBlock'>
              <h3>Body</h3>
              <p>Dimensions: {phone.body.dimensions}</p>
              <p>Weight: {phone.body.weight}</p>

              <h3>Display</h3>
              <p>Screen Size: {phone.display.screenSizeIN}"</p>
              <p>Panel: {phone.display.panel}</p>
              <p>Resolution: {phone.display.resolution}</p>
              <p>Refresh Rate: {phone.display.refreshRate} Hz</p>

              <h3>Performance</h3>
              <p>Chipset: {phone.performance.CPU}</p>
              <p>CPU: {phone.performance.CPUdetails}</p>
              <p>GPU: {phone.performance.GPU}</p>
              <p>RAM: {FormatArray("ram", phone.performance.ram)}</p>
              <p>Storage: {FormatArray("storage", phone.performance.storageGB)}</p>
            
              <h3>Battery</h3>
              <p>Capacity: {phone.battery.capacityMah} mAh</p>
              <p>Charging Speed: {phone.battery.chargingSpeedW} W</p>

              <h3>Camera</h3>
              <p>Selfie: {phone.camera.selfieCamMP
                ? FormatArray("camera", [].concat(phone.camera.selfieCamMP))
                : "None"}
              </p>
              <p>Rear: {FormatArray("camera", phone.camera.rearCamerasMP)}</p>

              <h3>Connectivity</h3>
              <p>Bluetooth Version: {phone.connectivity.bluetoothVersion}</p>
              <p>Port Type: {phone.connectivity.portType}</p>
              <p>Headphone Jack: {phone.connectivity.headphoneJack ? "Yes" : "No"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneTable