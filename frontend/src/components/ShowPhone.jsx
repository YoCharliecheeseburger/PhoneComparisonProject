import React from 'react'
import { Link } from 'react-router-dom'

const ShowPhone = ({phone}) => {
    return (

        <div className='phoneStyling'>
            <div className='phoneImg'>
                <img src={phone.image} alt='phoneFrontPicture'/>
            </div>
            <div className='phoneText'>
                <Link><p>{phone.name}</p></Link>
                <p>{phone.display.screenSizeIN}</p>
                <p>{phone.battery.capacityMah}</p>
                <p>{phone.connectivity.bluetoothVersion}</p>
                <p>{phone.Performance.GPU}</p>
                <div className='buttonPlacement'>
                    <button>Compare</button>
                </div>
            </div>
            
        </div>
    )
}

export default ShowPhone