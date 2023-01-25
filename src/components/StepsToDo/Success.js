import React from 'react'
import decoration from "../../assets/Decoration.svg"

export default function Success() {
  return (
    <div className= "StepsToDo_container container">
        <div className="success">
           <h1>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze</h1>
           <img src={decoration} alt="decoration"/>
         </div>
    </div>
  )
}
