import { useState, useEffect} from "react";
import { projectAuth } from "../Firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, passwordRep ) => {
        setError(null)
        setIsPending(true)
     
        try {
          //signup user
          const res = await projectAuth.createUserWithEmailAndPassword(email, password);
          

          if (!res) {
            throw new Error('Could not complete signup')
          }

          //dispatch login action
          dispatch({type: 'LOGIN', payload: res.user })

          //add display name to user 
          //await res.user.updateProfile({passwordRep})

          setIsPending(false);
         //update state
           if (!isCancelled) {
            setIsPending(false);
            setError(null);    
          }
        }
        catch (err) {
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

  return { signup, error, isPending } 

}



// import { useState, useEffect} from "react";
// import { projectAuth } from "../Firebase/config";
// import { useAuthContext } from "./useAuthContext";

// export const useSignup = () => {
//     const [isCancelled, setIsCancelled] = useState(false);
//     const [error, setError] = useState(null);
//     const [isPending, setIsPending] = useState(false);
//     const { dispatch } = useAuthContext();

//     const signup = async (email, password, samePassword) => {
//         setError(null)
//         setIsPending(true)

//         try {
//           //signup user
//           const res = await projectAuth.createUserWithEmailAndPassword(email, password);
          

//           if (!res) {
//             throw new Error('Could not complete signup')
//           }

//           //dispatch login action
//           dispatch({type: 'LOGIN', payload: res.user })


//          //update state
//            if (!isCancelled) {
//             setIsPending(false);
//             setError(null);    
//           }
//         }
//         catch (err) {
//           if (!isCancelled) {
//             console.log(err.message)
//             setError(err.message)
//             setIsPending(false)
//           }
//         }
//     }

//   useEffect(() => {
//     return () => setIsCancelled(true)
//   }, [])

//   return { signup, error, isPending } 

// }



