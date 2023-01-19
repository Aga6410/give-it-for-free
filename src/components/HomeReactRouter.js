import React from 'react'
import {Link} from "react-router-dom";

 const HomeReactRouter = () => {
  return (
    <>
        <Link to="/login">Log in</Link>
        <Link to="/register">Sign in</Link>
    </>
  )
}

export default HomeReactRouter;