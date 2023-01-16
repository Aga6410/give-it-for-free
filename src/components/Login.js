import React from 'react'
import HomeHeader from './HomeHeader';
import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.svg"

const Login = () => {
  return (
    <div className="Login">
      <HomeHeader/>
      <div className="Login__main">
        <span className="Login__logIn">Zaloguj się</span>
        <img src={decoration} alt="decoration"/>

        <form className="Login__form">
          <div className="Login__data">
            <label>
              Email
              <input
                
                type="email"
                name="email"
                id="name"
                
              />
            <p ></p>
            </label>
            <label>
              Hasło
              <input
                
                type="password"
                name="password"
                id="password"
                
              />
            <p className="Login_errorText"></p>
            </label>
          </div>
          <div className="Login__btns">
            <Link to="/register" className="btn">
              Załóż konto
            </Link>
            <input className="btn" type="submit" value="Zaloguj się" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;