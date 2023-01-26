import React from 'react';
import HomeHeader from "./Header/HomeHeader";
import HomeTitle from "./HomePage/HomeTitle";
import HomeThreeColumns from "./HomePage/HomeThreeColumns"
import HomeSteps from "./HomePage/HomeSteps";
import HomeAboutUs from "./HomePage/HomeAboutUs.js";
import HomeContact from "./HomePage/HomeContact";
import HomeFooter from "./Footer/HomeFooter";
import HomeOrganizationsList from './Organizations/HomeOrganizationsList';


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

