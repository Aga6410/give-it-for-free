import React from 'react'
import HomeHeader from '../Header/HomeHeader';
import GiveAway from '../Giveaway/GiveAway';
import StepsToDo from '../StepsToDo/StepsToDo';
import HomeContact from '../HomePage/HomeContact';
import HomeFooter from '../Footer/HomeFooter';


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
