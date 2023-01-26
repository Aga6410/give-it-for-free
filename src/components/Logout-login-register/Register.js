import React from 'react'
import HomeHeader from '../Header/HomeHeader';
import decoration from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import {useState} from 'react';
import { useSignup } from '../../Hooks/useSignup'


const Register = () => {

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordRep, setPasswordRep] = useState('');
  const {signup, isPending, error } = useSignup();

  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordRep: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordRep: ""
  });

  const updateForm = e => {
    const { name, value } = e.target;
    setForm(prev => {
      return {
        ...prev,
        [name]: value
      }
    })

    setErrors(prevState => ({
      ...prevState,
      [name]: ""
    }));
  };
  
  const validate = () => {

    const err = {};
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!re.test(form.email)) {
      err.email = "The email is badly formated!";
    }

    if (form.password.length < 6) {
      err.password = "The password is too short!";
    }

    if (form.passwordRep !== form.password) {
      err.passwordRep = "The passwords are not the same!";
    }

    if (Object.values(err).find(e => e.length)) {
      setErrors(err);
      return false;
    }
    return true;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validate(), "validate");
    
    if (validate()) {
      console.log(form.email);
      console.log(form.password);
    signup(form.email, form.password, form.passwordRep)
    }
  }

  return (
    <div className="Register_container container">
      <HomeHeader/>
      <div className="Register__main">
        <span className="Register__logIn">Sign in</span>
        <img src={decoration} alt="decoration"/>
        <form className="Register__form" onSubmit={handleSubmit}>
          <div className="Register__data">
            <label>
              Email
              <input
              className={!errors.email ? "Register__input" : "Register_error"}
              type="email"
              name="email"
              id="email"
              onChange={updateForm}
              />
            <span className="Register_errorText">{errors.email}</span>
            </label>
            <label>
              Password
              <input
              className={!errors.password ? "Register__input" : "Register_error"}
              type="password"
              name="password"
              id="password"
              onChange={updateForm}
              />
            <span className="Register_errorText">{errors.password}</span>
            </label>
            <label>
              Repeat password
              <input
              className={!errors.passwordRep ? "Register__input" : "Register_error"}
              type="password"
              name="passwordRep"
              id="passwordRep"
              onChange={updateForm}
              />
            <span className="Register_errorText">{errors.passwordRep}</span>
            </label>
          </div>
          <div className="Register__btns">
            <Link to="/login" className="btn">
              Login
            </Link>
            {!isPending && <button  className="btn">Sign in</button>}
            {isPending && <button className="btn" disabled>loading</button>}
            {error && <p>{error}</p>}
            </div>
          
        </form>
      </div>
  </div>   
  )
}

export default Register;