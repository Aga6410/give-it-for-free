import React, {useState} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import LastStep from './LastStep';
import Success from './Success';

export default function StepsToDo() {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <Step1 formData={formData} setFormData= {setFormData}/>;
    } else if (page === 1) {
      return <Step2 formData={formData} setFormData= {setFormData}/>;
    } else if (page === 2) {
      return <Step3 formData={formData} setFormData= {setFormData}/>;
    } else if (page === 3) {
      return <Step4 formData={formData} setFormData= {setFormData}/>;
    } else if (page === 4) {
      return <LastStep formData={formData} setFormData= {setFormData}/>;
    } else if (page === 5) {
      return <Success/>;
  }
  }

  const [formData, setFormData] = useState({
    step: 1,
    bag: "",
    typeGive: [],
    localization: "",
    whoGive: [],
    nameOfOrganization: "",
    street: "",
    city: "",
    postCode: "",
    phone: "",
    date: "",
    time: "",
    comment: ""
})

  return (
    <div className= "StepsToDo_container container">
      <div>{PageDisplay()}</div>
        <div className='buttonsBackNext'>
          <button 
          hidden={page === 5}
          disabled={page === 0}
          onClick = {() => {
            setPage((currPage) => currPage - 1);
          }}
          >Back</button>      
          <button 
          hidden={page === 5}
          onClick = {() => {
            setPage((currPage) => currPage + 1);
          }}
          >
            {page === 4 ? "Submit" : "Next"} 
          </button>
        </div> 
    </div>
  )
}
