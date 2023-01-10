import React from 'react';
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

const HomeFooter = () => {
    return (
      <footer>
         <span>Copyright by Coders Lab</span>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook"/></a>
      <a href="https://www.instagram.com/?hl=pl" target="blank" rel="noopener noreferrer"><img src={instagram} alt="instagram"/></a>
      </footer>   
    );
}

export default HomeFooter;