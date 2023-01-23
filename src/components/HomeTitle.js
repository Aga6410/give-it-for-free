import React from 'react';
//import hero from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const HomeTitle = () => {
    return (
    <div className='allSide_container container'>
        <div className="leftSidePhoto">      
        </div>
        <div className="rightSideIntroduction">
            <div className='introduction'>
                <h1>Start to help<br/>Give away things to worthwhile organisations!</h1>
                <img src={decoration} alt="decoration"/>
                <div className='twoButtons'>
                    <button className="firstButton">
                        <Link to="/login" style={{ textDecoration: 'none'}}>GIVE AWAY<br/>THINGS</Link>
                    </button>
                    <button className="secondButton">
                        <Link to="/" style={{ textDecoration: 'none'}}>ORGANIZE COLLECTION</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default HomeTitle;