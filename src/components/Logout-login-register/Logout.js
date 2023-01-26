import React from "react";
import decoration from "../../assets/Decoration.svg"
import {Link} from "react-router-dom";
import HomeHeader from "../Header/HomeHeader";

export default function LogOut() {

    return(
        <>
            <HomeHeader/>
            <div className="logout_container container">
                <h1>Logged out<br/>successfully!</h1>
                <img src={decoration} alt="decoration"/>
                <Link to='/'>Home page</Link>
            </div>
        </>
    )
}