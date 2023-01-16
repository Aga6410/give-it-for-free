import React from 'react'
import HomeHeader from './HomeHeader';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
import {useState} from 'react';


const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [samePassword, setSamePassword] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleChangeSamePassword = (e) => {
    setSamePassword(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, samePassword)
  }

  return (
    <div className="Register_container container">
      <HomeHeader/>
      <div className="Register__main">
        <span className="Register__logIn">Załóż konto</span>
        <img src={decoration} alt="decoration"/>
        <form className="Register__form" onSubmit={handleSubmit}>
          <div className="Register__data">
            <label>
              Email
              <input
              // className={!errors.email ? "Register__input" : "Register_error"}
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              />
            <span className="Register_errorText"></span>
            </label>
            <label>
              Hasło
              <input
              // className={!errors.password ? "Register__input" : "Register_error"}
              type="password"
              name="password"
              id="password"
              onChange={handleChangePassword}
              />
            <span className="Register_errorText"></span>
            </label>
            <label>
              Powtórz hasło
              <input
              // className={!errors.passwordRep ? "Register__input" : "Register_error"}
              value={samePassword}
              type="password"
              name="passwordRep"
              id="passwordRep"
              onChange={handleChangeSamePassword}
              // onChange={updateForm}
              />
            <span className="Register_errorText"></span>
            </label>
          </div>
          <div className="Register__btns">
            <Link to="/login" className="btn">
              Zaloguj się
            </Link>
            <input type="submit" className="btn" value="Załóż konto" />
          </div>
        </form>
      </div>
  </div>   
  )
}

export default Register;