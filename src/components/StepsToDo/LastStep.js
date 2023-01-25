import React from 'react';
import icon1 from '../../assets/Icon-1.svg'
import icon2 from '../../assets/Icon-4.svg'

export default function LastStep({ formData }) {
  return (
    <div className= "StepsToDo_container container">
      <div className="lastInfo">
                            <h1>Summary of you donation</h1>
                        </div>
                    <div className="summaryInformation">
                        <div className="summary">
                            <img src={icon1} alt="icon"/><h2>You give:</h2>
                            <p> Bags: {formData.bag}, things: {formData.typeGive}, who: {formData.whoGive}</p>
                            <img src={icon2} className="iconTwo" alt="icon"/><p>Localization: {formData.localization}  </p>
                        </div>
                        <div className="allColumnSummary">
                            <div className="fitstColumn columnAd">
                                <h2>Adrress of pickup:</h2>
                                <p>Street: {formData.street}</p>
                                <p>City: {formData.city}</p>
                                <p>Post code: {formData.postCode} </p>
                                <p>Phone number: {formData.phone}</p>
                            </div>
                            <div className="secondColumn columnAd">
                                <h2>Date of pickup: </h2>
                                <p>Date: {formData.date} </p>
                                <p>Time: {formData.time} </p>
                                <p>Comments:{formData.comment} </p>
                            </div>
                        </div>     
                        </div> 
                       
          
        
    </div>
  )
}
