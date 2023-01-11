import React from 'react';
import hero from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
//szkic

const HomeTitle = () => {
    return (
        <div>
<div className="leftSidePhoto">
 <img src={hero} alt="home-hero" style={{height: 963, width: 885}}/> 
</div>
<div className="rightSideIntroduction">
<h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
 <img src={decoration} alt="decoration"/>
 <div className='twoButtons'>
 <div className='firstButton'>
 <button className="firstButton1">
        <Link to="/login" style={{ textDecoration: 'none'}}>ODDAJ RZECZY</Link>
</button>
 </div>
  <div className='secondButton'>
 <button className="secondButton2">
        <Link to="/" style={{ textDecoration: 'none'}}>ZORGANIZUJ ZBIÓRKĘ</Link>
</button>
 </div>
 </div>
</div>
 
        </div>
    );
}

export default HomeTitle;