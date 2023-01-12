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
                <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decoration} alt="decoration"/>
                <div className='twoButtons'>
                    <button className="firstButton">
                        <Link to="/login" style={{ textDecoration: 'none'}}>ODDAJ <br/> RZECZY</Link>
                    </button>
                    <button className="secondButton">
                        <Link to="/" style={{ textDecoration: 'none'}}>ZORGANIZUJ ZBIÓRKĘ</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default HomeTitle;