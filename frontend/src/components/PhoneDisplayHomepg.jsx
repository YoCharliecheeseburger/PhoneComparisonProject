import React from 'react'
import { Link } from 'react-router-dom'

const PhoneDisplayHomepg = ({phone}) => {
    return (

        <div className='phoneStylingHome'>
            <Link to={`/phones/${phone.id}`}><p>{phone.name}</p></Link>


            <div className='phoneContentHome'>
                <div className='phoneImgHome'>
                    <img src={phone.image} alt='phoneFrontPicture'/>
                </div>

                <div className='phoneTextHome'>
                    <p>{phone.display.screenSizeIN}"</p>
                    <p>{phone.battery.capacityMah} mAh</p>
                    <p>{phone.display.refreshRate} Hz</p>
                    <p>{phone.performance.GPU}</p>
                    <div className='compareButtonPlacement'>
                        <button className='compareButton'>Compare</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneDisplayHomepg