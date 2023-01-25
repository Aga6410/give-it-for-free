import React, {useState} from 'react'


export default function Step1({ formData, setFormData }) {
    
    const typeGiveHandler = (e) => {
      console.log(e.target.value);
      const isPresent = formData.typeGive.includes(e.target.value);
      console.log(isPresent);
      if (isPresent) {
          
          setFormData((prev) => {
              return {
                  ...prev,
                  typeGive: prev.typeGive.filter(el => el !== e.target.value)
              }
          })
      }
      else {
          setFormData((prev) => {
              return {
                  ...prev,
                  typeGive: [...prev.typeGive, e.target.value]
              }
          })

      }

  }

  return (
    <div className= "StepsToDo_container container">
      <div className="importantInformation">
        <h1>Important!</h1>
        <p>Fill in the details about your things. Thanks to that we know who we can give them.</p>
      </div>
        <div className="firstStep step">
          <p>Step 1/4</p>
          <h1>Choose what you would like to give away:</h1>
          <div className='formula'>
            <label>
              <input type="radio" 
              name="return" 
              value="second hand clothes"
              onClick={(e) => typeGiveHandler(e)}
              />
              <span>second hand clothes</span>
            </label>
            <label>
              <input type="radio" name="return" value="cloth to throw away"  onClick={(e) => typeGiveHandler(e)} />
              <span>cloth to throw away</span>
            </label>
            <label>
              <input type="radio" name="return" value="toys"  onClick={(e) => typeGiveHandler(e)}/>
              <span>toys</span>
            </label>
            <label>
              <input type="radio" name="return" value="books"  onClick={(e) => typeGiveHandler(e)}/>
              <span>books</span>
            </label>
            <label>
              <input type="radio" name="return" value="others" onClick={(e) => typeGiveHandler(e)} />
              <span>others</span> 
            </label>
          </div>           
        </div> 
    </div>
  )
}
