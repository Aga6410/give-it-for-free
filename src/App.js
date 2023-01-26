import React from 'react';
import {Route, Routes, BrowserRouter } from "react-router-dom";
import  { useAuthContext } from './Hooks/useAuthContext';

//components
import Home from './components/Home';
import Register from './components/Logout-login-register/Register';
import Login from './components/Logout-login-register/Login';
import Logout from "./components/Logout-login-register/Logout"
import FormAfterLogin from './components/FormAfterLogin/FormAfterLogin';
import "./scss/main.scss";


function App() {
  const { authIsReady } = useAuthContext()

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="login" element={<Login/>}/>
             <Route path="register" element={<Register/>}/>
             <Route path="logout" element={<Logout/>}/>
             <Route path="form" element={<FormAfterLogin/>}/>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;