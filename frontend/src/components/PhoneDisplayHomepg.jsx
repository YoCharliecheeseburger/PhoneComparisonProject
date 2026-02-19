import React from 'react'
import { Link } from 'react-router-dom'
import screensize from '../assets/screensize.png'
import batterycap from '../assets/batterycap.png'
import phonecamera from '../assets/phonecamera.png'
import memory from '../assets/memory.png'

const PhoneDisplayHomepg = ({phone}) => {

    const formatArray = (key, arr) => {
        switch (key) {
        case "camera":
            return arr.map(number => `${number} MP`).join(" + ")

        case "ram":
            return arr.map(number => (number >= 512 ? `${number} MB` : `${number} GB`)).join(" / ")
            //only the nokia has mb and no phone is capable of 512gb of ram so this should be fine :sob:
        case "storage":
            return arr.map(number => `${number} GB`).join(" / ")

        default:
            return arr.join(" / ")
        }
    }

    const handleCompare = () => {
        const stored = JSON.parse(localStorage.getItem("comparePhones")) || [];

    if (!stored.includes(phone.id)) {
        stored.push(phone.id);
    }
    //why would u want to compare the same phone silly

    localStorage.setItem("comparePhones", JSON.stringify(stored));

    window.dispatchEvent(new Event("compareUpdated"));
    };

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
                            <img src={phonecamera} alt="Selfie camera" title='Selfie Camera'/><p>{Array.isArray(phone.camera.selfieCamMP) ? formatArray("camera", phone.camera.selfieCamMP) : (phone.camera.selfieCamMP ? `${phone.camera.selfieCamMP} MP` : "None")}</p>
                        </div>
                        <div className='getpegged'>
                            <img src={memory} alt="RAM" title='RAM'/><p>{formatArray("ram", phone.performance.ram)}</p>
                        </div>
                    </div>
                    <div className='compareButtonPlacement'>
                        <button className='compareButton' onClick={handleCompare}><p>Compare</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default PhoneDisplayHomepg

