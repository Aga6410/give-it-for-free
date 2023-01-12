import React from 'react'
import {Link} from "react-router-dom";

 const HomeReactRouter = () => {
  return (
    <>
        <Link to="/login">Zaloguj</Link>
        <Link to="/register">Załóż konto</Link>
    </>
  )
}

export default HomeReactRouter;