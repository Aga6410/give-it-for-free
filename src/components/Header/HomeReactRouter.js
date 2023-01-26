import React from 'react'
import {Link} from "react-router-dom";

 const HomeReactRouter = () => {
  return (
    <div className='loginRegister'>
        <Link to="/login">Log in</Link>
        <Link to="/register">Sign in</Link>
    </div>
  )
}

export default HomeReactRouter;