import React from 'react';
import './Header.scss'
import useClock from './useClock';


function Header(props) {
    const {timeString} = useClock();
    
    return (
        <div className="Header">
            <p>Viettel<i className="fas fa-wifi"></i></p>
            <p>{timeString}</p>
            <p>100%<i className="fas fa-battery-full"></i></p>
        </div>
    );
}

export default Header;