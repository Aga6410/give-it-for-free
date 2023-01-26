import React from 'react'

export default function Step4({ formData, setFormData }) {
  return (
    <div className= "fourthStep_container container">
       <div className="importantInformation">
          <h1>Important!</h1>
          <p>Fill in the address and date of pickup by courier.</p>
        </div>    
        <div className="fourthStep step">
          <p>Step 4/4</p>
          <h1>Fill in the address and date of pickup by courier</h1>
          <div className="pickupAddress">
            <div className="firstColumn columnAd">
              <h2>Address of pickup:</h2>
              {/* <div className="column"> */}
              <label>Street:</label>
              <input type="text" 
              name="street" 
              value={formData.street} 
              onChange= {(e) => 
                setFormData({ ...formData, street: e.target.value})
            }/>
              <label>City:</label>
              <input type="text"  
              name="city"
              value={formData.city} 
              onChange= {(e) => 
                setFormData({ ...formData, city: e.target.value})
            }/>
              <label>Post code:</label>
              <input type="text"
               name="postCode"
               value={formData.postCode} 
              onChange= {(e) => 
                setFormData({ ...formData, postCode: e.target.value})
            }
               />
              <label>Phone number:</label>
              <input type="text" 
              name="phone"
              value={formData.phone} 
              onChange= {(e) => 
                setFormData({ ...formData, phone: e.target.value})
            }
              />
              </div>
            {/* </div> */}
            <div className="secondColumn columnAd">
              <h2>Date of pickup:</h2>
              {/* <div className="column"> */}
              <label>Date:</label>
              <input type="date" 
              name="date"
              value={formData.date} 
              onChange= {(e) => 
                setFormData({ ...formData, date: e.target.value})
            }
              />
              <label>Time:</label>
              <input type="time"  
              name="time"
              value={formData.time} 
              onChange= {(e) => 
                setFormData({ ...formData, time: e.target.value})
            }/>
              <label>Comments:</label>
              <textarea type="note"
               name="moreInfo"
               value={formData.comment} 
              onChange= {(e) => 
                setFormData({ ...formData, comment: e.target.value})
            }
               />
              {/* </div> */}
            </div>
          </div>
        </div>
    </div>
  )
}
