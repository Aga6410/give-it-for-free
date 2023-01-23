import React from 'react';
import {Link} from "react-router-dom";

import decoration from "../assets/Decoration.svg"
import iconOne from "../assets/Icon-1.svg"
import iconTwo from "../assets/Icon-2.svg"
import iconThree from "../assets/Icon-3.svg"
import iconFour from "../assets/Icon-4.svg"

const HomeSteps = () => {
    return (
        <section id="homeSteps" className='homeSteps_container container'>
            <div className="homeStep">
                <h1>It is only four steps</h1>
                <img src={decoration} alt="decoration"/>
            </div>
            <div className="fourSteps">
                <div className="firstStep">
                  <img src={iconOne} alt="icons"/>
                  <h1>Choose things</h1>
                  <div className="line"></div>
                  <p>cloth, toys and others</p>
               </div>
               <div className="secondStep">
               <img src={iconTwo} alt="icons"/>
                <h1>Pack them</h1>
                <div className="line"></div>
                <p>use garbage bags</p>
                </div>
            <div className="thirdStep">
                <img src={iconThree} alt="icons"/>
                <h1>Decide who you want to help</h1>
                <div className="line"></div>
                <p>choose proper organization</p>
            </div>
            <div className="fourthStep">
                <img src={iconFour} alt="icons"/>
                <h1>Order a courier</h1>
                <div className="line"></div>
                <p>courier comes on a convenient date</p>
            </div>
            </div>
            <div className='buttonStep'>
            <button className="stepButton">
                <Link to="/login" style={{ textDecoration: 'none'}}>GIVE AWAY</Link>
            </button>
            </div>
        </section>
    );
}

export default HomeSteps;