import React from 'react'
import HomeHeader from './HomeHeader';
import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.svg"
import {useState} from 'react';
import { useLogin } from '../Hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  }

  return (
    <div className="Login_container container">
      <HomeHeader/>
      <div className="Login__main">
        <h2 className="Login__logIn">Zaloguj się</h2>
        <img src={decoration} alt="decoration"/>

        <form className="Login__form" onSubmit={handleSubmit}>
          <div className="Login__data">
            <label>
              <span>Email</span>
              <input
                value={email}
                type="email"
                name="email"
                id="name"
                onChange={handleChangeEmail}
              />
            <p className="Login_errorText"></p>
            </label>
            <label>
              <span>Hasło</span>
              <input
                 value={password}
                type="password"
                name="password"
                id="password"
                onChange={handleChangePassword}
              />
            <p className="Login_errorText"></p>
            </label>
          </div>
          <div className="Login__btns">
            <Link to="/register" className="btn">
              Załóż konto
            </Link>
            {!isPending && <button className="btn" >Zaloguj się</button>}
            {isPending && <button className = "btn" disabled>Loading</button>}
            {error && <p>{error}</p> }
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Login;