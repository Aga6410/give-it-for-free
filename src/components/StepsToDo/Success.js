import React from 'react'
import decoration from "../../assets/Decoration.svg"

export default function Success() {
  return (
    <div className= "success_container container">
      <h1>Thank you for filling out our form. For your email we will send the information about the pickup!</h1>
      <img src={decoration} alt="decoration"/>
    </div>
  )
}
