import React from 'react'
import { useState } from "react";
import { projectAuth } from "../Firebase/config";



const useSingup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const signup = async (email, password, samePassword) => {
        setError(null)

    }
  return {error, isPending, signup} (
    <div>useSingup</div>
  )
}

export default useSingup;