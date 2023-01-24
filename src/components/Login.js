// import React from 'react'
// import HomeHeader from './HomeHeader';
// import {Link} from "react-router-dom";
// import decoration from "../assets/Decoration.svg"
// import {useState} from 'react';
// import { useLogin } from '../Hooks/useLogin';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login, error, isPending } = useLogin();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",  
//   });
//   const [errors, setErrors] = useState({
//     email: "",
//     password: "",
//   });

//   const updateForm = e => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });

//     setErrors(prevState => ({
//       ...prevState,
//       [name]: ""
//     }));
//   };

//   const validate = () => {

//     const err = {};
//     const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

//     if (!re.test(form.email)) {
//       err.email = "The email is badly formated!";
//     }

//     if (form.password.length < 6) {
//       err.password = "The password is too short!";
//     }

//     if (Object.values(err).find(e => e.length)) {
//       setErrors(err);
//       return false;
//     }
//     return true;
//   };

//   // const handleChangeEmail = (e) => {
//   //   setEmail(e.target.value);
//   // }
  
//   // const handleChangePassword = (e) => {
//   //   setPassword(e.target.value);
//   // }
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//     login(email, password)
//     }
//   }

//   return (
//     <div className="Login_container container">
//       <HomeHeader/>
//       <div className="Login__main">
//         <h2 className="Login__logIn">Log in</h2>
//         <img src={decoration} alt="decoration"/>

//         <form className="Login__form" onSubmit={handleSubmit}>
//           <div className="Login__data">
//             <label>
//               <span>Email</span>
//               <input
//                 className={!errors.email ? "Login_input" : "Login_error"}
//                 // value={email}
//                 type="email"
//                 name="email"
//                 id="name"
//                 onChange={updateForm}
//               />
//              <p className="Login_errorText">{errors.email}</p>
//             </label>
//             <label>
//               <span>Password</span>
//               <input
//                 //  value={password}
//                 className={!errors.password ? "Login_input" : "Login_error"}
//                 type="password"
//                 name="password"
//                 id="password"
//                 onChange={updateForm}
//               />
//             <p className="Login_errorText">{errors.password}</p>
//             </label>
//           </div>
//           <div className="Login__btns">
//             <Link to="/register" className="btn">
//               Sign in
//             </Link>
//             {!isPending && <button className="btn" >Login</button>}
//             {isPending && <button className = "btn" disabled>Loading</button>}
//             {error && <p>{error}</p> }
//           </div>
          
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login;


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
        <h2 className="Login__logIn">Login</h2>
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
              <span>Password</span>
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
              Sign in
            </Link>
            {!isPending && <button className="btn" >Login</button>}
            {isPending && <button className = "btn" disabled>Loading</button>}
            {error && <p>{error}</p> }
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Login;