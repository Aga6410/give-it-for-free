import React from 'react';
import HomeReactScroll from "./HomeReactScroll";
import HomeReactRouter from './HomeReactRouter';
import {Link} from "react-router-dom";
import { useLogout } from '../Hooks/useLogout';
import { useAuthContext } from '../Hooks/useAuthContext';

const HomeHeader = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    return (
        <header id ="header" className="header">
            <div className="header_container container">
                <ul className="header_nav1">
                    {!user && (
                        <>
                        <HomeReactRouter/>
                        </>
                     )}
                   
                   {user && (
                    <div className='greatings_logout_buttons'>
                      <li className='greatings_words'>Hello, {user.email}!</li>
                      <Link to="/giveaway">
                      <button className='btn'>Give away</button> 
                      </Link>
                      <Link to="/logout">
                      <button className='btn' onClick={logout}>Logout</button> 
                      </Link>
                    </div>
                   )}
                </ul>
                <ul className="header_nav2">
                    <Link to="/#">Start</Link>
                    <HomeReactScroll/>
                </ul>   
            </div>
        </header> 
            
    );
}

export default HomeHeader;