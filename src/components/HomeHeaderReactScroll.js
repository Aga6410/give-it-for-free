import {Link} from "react-scroll";
import React from "react";

const ReactScroll = () => {

    return (
        <>
            <Link to="header" spy={true} smooth={true} offset={0} duration={1250}>Start</Link>
            <Link to="threeColumns" spy={true} smooth={true} offset={0} duration={1250}>O co chodzi?</Link>
            <Link to="aboutUs" spy={true} smooth={true} offset={0} duration={1250}>O nas</Link>
            <Link to="homeOrganizations" spy={true} smooth={true} offset={0} duration={1250}>Fundacja i organizacje</Link>
            <Link to="contact" spy={true} smooth={true} offset={0} duration={1250}>Kontakt</Link> 
        </>
    )

}

export default ReactScroll;