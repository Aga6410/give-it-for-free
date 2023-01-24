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
          <h1>Choose what you would like to give away:</h1>
          <div className='formula'>
            <label>
              <input type="radio" value="second hand clothes" name="return" />
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
        <button>Next</button>

        <div className="importantInformation">
          <h1>Important!</h1>
          <p>Everything you should pack in 60l bags. Detailled instruction you will find HERE.</p>
        </div>    
        <div className="secondStep step">
          <p>Step 2/4</p>
          <h1>Choose the number of 60l bags you had used</h1>                   
          <label>Number of 60l bags:</label>
            <select>Number of 60l bags:
              <option>-- Choose --</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>                  
        </div>           
        <div className='buttonsBackNext'>
          <button>Back</button>      
          <button>Next</button>
        </div>    
      
        <div className="importantInformation">
          <h1>Important!</h1>
          <p>If you want who you want to help you can choose it below. Moreover you can filter the organisations using localisation or aim of help.</p>
        </div>    
        <div className="thirdStep step">
          <p>Step 3/4</p>
          <h1>Localization: </h1><br/>
          <select>
            <option>-- Choose --</option>
            <option>Poznan</option>
            <option>Warsaw</option>
            <option>Cracow</option>
            <option>Wroclaw</option>
            <option>Katowice</option>
          </select>
          <h5>Who do you want to help?</h5><br/>
          <ul className='checkbox_list'>
            <li>
              <input type="checkbox" id="check_1" value="children"  />
              <label for="check_1">children </label>
            </li>
            <li>
              <input type="checkbox" id="check_2"  value="single mother" />
              <label for="check_2">single mother</label>
            </li>
            <li>
              <input type="checkbox" id="check_3"  value="homeless" />
              <label for="check_3">homeless</label>
            </li>
            <li>
              <input type="checkbox" id="check_4"  value="handicapped"/>
              <label for="check_4">handicapped </label>
            </li>
            <li>
              <input type="checkbox" id="check_5" value="elderly people" />
              <label for="check_5">elderly people </label>
            </li>
          </ul>
          <div className='textareaToFillIn'>
            <h5>Fill in the name of organization (optionally)</h5>
            <textarea></textarea>
          </div>         
        </div>           
        <div className='buttonsBackNext'>
          <button>Back</button>      
          <button>Next</button>
        </div>    
      
        <div className="importantInformation">
          <h1>Important!</h1>
          <p>Fill in the address and date of pickup by courier.</p>
        </div>    
        <div className="fourthStep step">
          <p>Step 4/4</p>
          <h1>Fill in the address and date of pickup by courier</h1>
          <div className="pickupAddress">
            <div className="fitstColumn columnAd">
              <h2>Address of pickup:</h2>
              <label>Street:</label>
              <input type="text" name="street"/><br/>
              <label>City:</label>
              <input type="text"  name="city"/><br/>
              <label>Post code:</label>
              <input type="text" name="postCode"/><br/>
              <label>Phone number:</label>
              <input type="text" name="phone"/><br/>
            </div>
            <div className="secondColumn columnAd">
              <h2>Date of pickup:</h2>
              <label>Date:</label>
              <input type="text" name="date"/><br/>
              <label>Time:</label>
              <input type="text"  name="hour"/><br/>
              <label>Comments:</label>
              <input type="text" name="moreInfo"/><br/>
            </div>
          </div>
        </div>
        <div className='buttonsBackNext'>
          <button>Back</button>      
          <button>Next</button>
        </div> 
                

    </div>
  )
}
