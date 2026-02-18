import React from 'react'
import { Link } from 'react-router-dom'


const PhoneDisplayHomepg = ({phone}) => {

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
                    <img src={phone.image} alt='phoneFrontPicture'/>
                </div>

                <div className='phoneTextHome'>
                    <p>{phone.display.screenSizeIN}"</p>
                    <p>{phone.battery.capacityMah} mAh</p>
                    <p>{phone.display.refreshRate} Hz</p>
                    <p>{phone.performance.GPU}</p>
                    <div className='compareButtonPlacement'>
                        <button className='compareButton' onClick={handleCompare}><p>Compare</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default PhoneDisplayHomepg

