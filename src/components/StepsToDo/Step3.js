import React from 'react'

export default function Step3({ formData, setFormData }) {
    
    const whoGiveHandler = (e) => {
        console.log(e.target.value);
        const isPresent = formData.whoGive.includes(e.target.value);
        console.log(isPresent);
        if (isPresent) {
            
            setFormData((prev) => {
                return {
                    ...prev,
                    whoGive: prev.whoGive.filter(el => el !== e.target.value)
                }
            })
        }
        else {
            setFormData((prev) => {
                return {
                    ...prev,
                    whoGive: [...prev.whoGive, e.target.value]
                }
            })

        }

    }

  return (
    <div className= "StepsToDo_container container">
       <div className="importantInformation">
          <h1>Important!</h1>
          <p>If you want who you want to help you can choose it below. Moreover you can filter the organisations using localisation or aim of help.</p>
        </div>    
        <div className="thirdStep step">
          <p>Step 3/4</p>
          <h1>Localization: </h1><br/>
          <select value={formData.localization} 
              onChange= {(e) => 
                setFormData({ ...formData, localization: e.target.value})
            }>
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
              <input type="checkbox" id="check_1" value="children" onClick={(e) => whoGiveHandler(e)} />
              <label htmlFor="check_1">children </label>
            </li>
            <li>
              <input type="checkbox" id="check_2"  value="single mother" onClick={(e) => whoGiveHandler(e)} />
              <label htmlFor="check_2">single mother</label>
            </li>
            <li>
              <input type="checkbox" id="check_3"  value="homeless" onClick={(e) => whoGiveHandler(e)} />
              <label htmlFor="check_3">homeless</label>
            </li>
            <li>
              <input type="checkbox" id="check_4"  value="handicapped" onClick={(e) => whoGiveHandler(e)}/>
              <label htmlFor="check_4">handicapped </label>
            </li>
            <li>
              <input type="checkbox" id="check_5" value="elderly people" onClick={(e) => whoGiveHandler(e)}/>
              <label htmlFor="check_5">elderly people </label>
            </li>
          </ul>
          <div className='textareaToFillIn'>
            <h5>Fill in the name of organization (optionally)
            </h5>
            <textarea value={formData.nameOfOrganization} onChange={(e) =>
            setFormData({ ...formData, nameOfOrganization: e.target.value})
            }></textarea>
          </div>         
        </div>           
    </div>
  )
}
