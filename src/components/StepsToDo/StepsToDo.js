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
          <label >children
            <input type="checkbox" value="dzieciom"  />
          </label>
          <label>single mother
            <input type="checkbox" value="samotnym matkom" />
          </label>
          <label >homeless
            <input type="checkbox" value="bezdomnym" />
          </label><br/>
          <label >handicapped
            <input type="checkbox" value="niepełnosprawnym"/>
          </label>
          <label>elderly people
            <input type="checkbox" value="osobom starszym" />
          </label>
          <h5>Fill in the name of organization (optionally)</h5>
          <textarea></textarea>
                      
        </div>           
        <div className='buttonsBackNext'>
          <button>Back</button>      
          <button>Next</button>
        </div>    
      
                

    </div>
  )
}
