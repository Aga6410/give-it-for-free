import React from 'react';
import {Link} from "react-scroll";

const HomeHeader = () => {
    return (
        <header className="header">
            <div className="header_container container">
            <ul className="header_nav">
                <li className="nav_list1">
                        <Link to="/login">Zaloguj</Link>
                        <Link to="/register">Załóż konto</Link>
                </li>
            </ul>
            </div>
        </header> 
            
    );
}

export default HomeHeader;