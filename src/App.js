import React from 'react';
import {Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import "./scss/main.scss";

function App() {
  return (
  <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="login" element={Login}/>
       <Route path="register" element={Register}/>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;

// import { BrowserRouter } from 'react-router-dom';
// import Login from "./Login";
// import Register from "./Register";

// <BrowserRouter>
// <Routes>
// <Route path="login" element={Login}/>
// <Route path="register" element={Register}/>

// </Routes>
// </BrowserRouter>