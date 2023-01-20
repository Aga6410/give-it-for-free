import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeTitle from "./HomeTitle";
import HomeThreeColumns from "./HomeThreeColumns"
import HomeSteps from "./HomeSteps";
import HomeAboutUs from "./HomeAboutUs.js";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";
import HomeOrganizationsList from './HomeOrganizationsList';


const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeTitle/>
            <HomeThreeColumns />
            <HomeSteps />
            <HomeAboutUs />
            <HomeOrganizationsList/>
            <HomeContact />
            <HomeFooter/>
        </>
    );
};

export default Home;

