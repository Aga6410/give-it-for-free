import React from 'react';
import decoration from "../../assets/Decoration.svg";


export default function GiveAway() {
  return (
    <>
    <div className='giveAway_container container'>
       <div className="allSideProject">
         <div className="leftSideProject">
         </div>
         <div className="rightSideProject">
          <div className="headerProject">
              <h1>Give away the things<br/>PEOPLE IN NEED</h1>
              <img src={decoration} alt="decoration"/><br/>
              <h2>It is only four steps:</h2>
              <div className="stepsToFollow">
                  <div className="firstStep step">
                    <h3>1</h3>
                    <p>Choose the things</p>
                  </div>
                  <div className="firstStep step">
                    <h3>2</h3>
                    <p>Pack in bags</p>
                  </div>
                  <div className="firstStep step">
                    <h3>3</h3>
                    <p>Select the foundation</p>
                  </div>
                  <div className="firstStep step">
                    <h3>4</h3>
                    <p>Order a courier</p>
                  </div>
              </div>
            </div>
          </div>
        </div>    
    </div>
    
    </>
  )
}
