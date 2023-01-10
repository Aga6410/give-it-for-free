import {Link} from "react-scroll";
import React from "react";

const ReactScroll = () => {

    return (
        <>
            <Link to="HomeThreeColumns" spy={true} smooth={true} offset={50} duration={1250}>O co chodzi?</Link>
            <Link to="HomeAboutUs" spy={true} smooth={true} offset={50} duration={1250}>O nas</Link>
            <Link to="HomeOrganizations" spy={true} smooth={true} offset={50} duration={1250}>Fundacja i organizacje</Link>
            <Link to="HomeContact" spy={true} smooth={true} offset={50} duration={1250}>Kontakt</Link> 
        </>
    )

}

export default ReactScroll;