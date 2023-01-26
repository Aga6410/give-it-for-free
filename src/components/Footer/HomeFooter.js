import React from 'react';
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";

const HomeFooter = () => {
    return (
      <footer className='footer_container container'>
         <span>Copyright by CL</span>
         <div className='socialmedia'>
          <div className='facebook'>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" style={{width:30, height:30}}/></a>
          </div>
         <div className='instagram'>
          <a href="https://www.instagram.com/?hl=pl" target="blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" style={{width:30, height:30}}/></a>
          </div>
        </div>
      </footer>   
    );
}

export default HomeFooter;