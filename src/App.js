import React from 'react';
import {Route, Routes, BrowserRouter } from "react-router-dom";
import  { useAuthContext } from './Hooks/useAuthContext';

//components
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Logout from "./components/Logout/Logout"
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
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;