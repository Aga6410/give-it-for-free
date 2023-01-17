import React from 'react';
import HomeReactScroll from "./HomeReactScroll";
import HomeReactRouter from './HomeReactRouter';
import {Link} from "react-router-dom";

const HomeHeader = () => {
    
    return (
        <header id ="header" className="header">
            <div className="header_container container">
                <ul className="header_nav1">
                   <HomeReactRouter/>
                </ul>
                <ul className="header_nav2">
                    <Link to="/#">Start</Link>
                    <HomeReactScroll/> 
                </ul>     
            </div>
        </header> 
            
    );
}

export default HomeHeader;