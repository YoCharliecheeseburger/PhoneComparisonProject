import { Link } from 'react-router-dom'
import screensize from '../assets/screensize.png'
import batterycap from '../assets/batterycap.png'
import phonecamera from '../assets/phonecamera.png'
import memory from '../assets/memory.png'
import FormatArray from '../logic/FormatArray.jsx';
import { addToCompare } from '../logic/CompareLogic.jsx';


const PhoneDisplayHomepg = ({phone}) => {

    return (

        <div className='phoneStylingHome'>
            <Link to={`/phones/${phone.id}`}><p>{phone.name}</p></Link>


            <div className='phoneContentHome'>
                <div className='phoneImgHome'>
                    <img src={phone.image} alt={phone.name}/>
                </div>

                <div className='phoneTextHome'>
                    <div className='iconsTextPos'>
                        <div className='getpegged'>
                            <img src={screensize} alt="Screen Size" title='Screen size' /><p>{phone.display.screenSizeIN}"</p>
                        </div>
                        <div className='getpegged'>
                            <img src={batterycap} alt="Battery Capacity" title='Battery capacity'/><p>{phone.battery.capacityMah} mAh</p>
                        </div>
                        <div className='getpegged'>
                            <img src={phonecamera} alt="Selfie camera" title='Selfie Camera'/><p>{phone.camera.selfieCamMP ? FormatArray("camera", [].concat(phone.camera.selfieCamMP)): "None"}</p>
                        </div>
                        <div className='getpegged'>
                            <img src={memory} alt="RAM" title='RAM'/><p>{FormatArray("ram", phone.performance.ram)}</p>
                        </div>
                    </div>
                    <div className='compareButtonPlacement'>
                        <button className='compareButton' onClick={addToCompare}><p>Compare</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default PhoneDisplayHomepg

