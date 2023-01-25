import React, {useState} from 'react'


export default function Step1({ formData, setFormData }) {
    const [typeGive, setTypeGive] = useState('')

    // const handleTypeGive = (event) => {
    //     setTypeGive(event.target.value)
    // }

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
            <label  value={formData.typeGive} onChange={(event) =>
            setFormData({ ...formData, typeGive: event.target.value})
              }>
              <input type="radio" 
            
              name="return" 
              
              />
              <span>second hand clothes</span>
            </label>
            <label>
              <input type="radio" name="return" value="cloth to throw away" />
              <span>cloth to throw away</span>
            </label>
            <label>
              <input type="radio" name="return" value="toys" />
              <span>toys</span>
            </label>
            <label>
              <input type="radio" name="return" value="books" />
              <span>books</span>
            </label>
            <label>
              <input type="radio" name="return" value="others" />
              <span>others</span> 
            </label>
          </div>           
        </div> 
    </div>
  )
}
