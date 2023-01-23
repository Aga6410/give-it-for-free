import React from 'react'

export default function StepsToDo() {
  return (
    <div className= "StepsToDo_container container">
      <div className="importantInformation">
        <h1>Important!</h1>
        <p>Fill in the details about your things. Thanks to that we know who we can give them.</p>
      </div>
        <div className="firstStep step">
          <p>Step 1/4</p>
          <h1>Choose what you would like to give away: </h1>
          <input type="radio" value="ubrania, które nadają się do ponownego użycia" name="return" />
          <label>second hand clothes</label><br/>
          <input type="radio" name="return" value="ubrania, do wyrzucenia" />
          <label>cloth to throw away</label><br/>
          <input type="radio" name="return" value="zabawki" />
          <label>toys</label><br/>
          <input type="radio" name="return" value="książki" />
          <label>books</label><br/>
          <input type="radio" name="return" value="inne" />
          <label>others</label>                
        </div> 
        <button>Next</button>   
                 
      
                

    </div>
  )
}
