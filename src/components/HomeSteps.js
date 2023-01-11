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
                <h1>Wystarczą 4 proste kroki</h1>
                <img src={decoration} alt="decoration"/>
            </div>
            <div className="fourSteps">
                <div className="firstStep">
                    <img src={iconOne} alt="icons"/>
                    <h1>Wybierz rzeczy</h1>
                    <div className="line"></div>
                    <p>ubrania, zabawki, sprzęt i inne</p>
               </div>
               <div className="secondStep">
               <img src={iconTwo} alt="icons"/>
                <h1>Spakuj je</h1>
                <div className="line"></div>
                <p>skorzystaj z worków na śmieci</p>
                </div>
            <div className="thirdStep">
                <img src={iconThree} alt="icons"/>
                <h1>Zdecyduj komu chcesz pomóc</h1>
                <div className="line"></div>
                <p>wybierz zaufane miejsce</p>
            </div>
            <div className="fourthStep">
                <img src={iconFour} alt="icons"/>
                <h1>Zamów kuriera</h1>
                <div className="line"></div>
                <p>kurier przyjedzie w dogodnym terminie</p>
            </div>
            </div>
            <div className='buttonStep'>
            <button className="stepButton">
                <Link to="/login" style={{ textDecoration: 'none'}}>ODDAJ RZECZY</Link>
            </button>
            </div>
       
     
        </section>
    );
}

export default HomeSteps;