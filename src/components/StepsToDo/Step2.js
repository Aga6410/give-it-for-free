import React from 'react'

export default function Step2({ formData, setFormData }) {
  return (
    <div className= "secondStep_container container">
      <div className="importantInformation">
          <h1>Important!</h1>
          <p>Everything you should pack in 60l bags. Detailled instruction you will find HERE.</p>
        </div>    
        <div className="secondStep step">
          <p>Step 2/4</p>
          <h1>Choose the number of 60l bags you had used</h1>                   
          <label>Number of 60l bags:</label>
            <select value={formData.bag} 
              onChange= {(e) => 
                setFormData({ ...formData, bag: e.target.value})
            }>Number of 60l bags:
              <option disabled selected>-- Choose --</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>                  
        </div>             
    </div>
  )
}
