import { useState, useEffect} from "react";
import { projectAuth } from "../Firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null);
        setIsPending(true);

        //sign the user out
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password);

            //dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user });
            setIsPending(false);
            //update state
            if (!isCancelled) {
               console.log("isCancelled")
               setIsPending(false);
               setError(null);  
            }
           

        }
        catch(err) {
            if (!isCancelled) {
              console.log(err.message)
              setError(err.message)
              setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
      }, [])

    return { login, error, isPending }
}