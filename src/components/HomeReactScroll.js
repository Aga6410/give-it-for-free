import {Link} from "react-scroll";
import React from "react";

const ReactScroll = () => {

    return (
        <div id="reactScrollMenu" className="reactScrollMenu">
            {/* <Link to="header" spy={true} smooth={true} offset={100} duration={1250}>Start</Link> */}
            <Link to="threeColumns" spy={true} smooth={true} offset={0} duration={1250}>What we offer?</Link>
            <Link to="aboutUs" spy={true} smooth={true} offset={0} duration={1250}>About us</Link>
            <Link to="homeOrganizations" spy={true} smooth={true} offset={0} duration={1250}>Foundations and organizations</Link>
            <Link to="contact" spy={true} smooth={true} offset={0} duration={1250}>Contact</Link> 
        </div>
    )
}

export default ReactScroll;