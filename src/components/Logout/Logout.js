import React from "react";
import decoration from "../../assets/Decoration.svg"
import {Link} from "react-router-dom";
import HomeHeader from "../HomeHeader";

export default function LogOut() {

    return(
        <>
            <HomeHeader/>
            <div className="logout_container container">
                <h1>Wylogowanie nastąpiło<br/>pomyślnie!</h1>
                <img src={decoration} alt="decoration"/>
                <Link to='/'>Strona główna</Link>
            </div>
        </>
    )
}