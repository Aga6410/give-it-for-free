import React from 'react'
import HomeHeader from '../HomeHeader';
import GiveAway from '../Giveaway/GiveAway';
import StepsToDo from '../StepsToDo/StepsToDo';
import HomeContact from '../HomeContact';
import HomeFooter from '../HomeFooter';


export default function FormAfterLogin() {
  return (
    <>
    <HomeHeader />
    <GiveAway/>
    <StepsToDo/>
    <HomeContact />
    <HomeFooter/>
</>
  )
}
