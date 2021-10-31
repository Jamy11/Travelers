import { GoogleAuthProvider , getAuth , signInWithPopup , signOut , onAuthStateChanged} from "firebase/auth";
import firebaseInitialize from "../Firebase/firebase.init";
import {useState , useEffect} from 'react'


firebaseInitialize()
const useFirebase =()=>{

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        signOut(auth).then(() => {
            setUser({})
            setIsLoading(false)
          }).catch((error) => {
            // An error happened.
            console.log(error)
          });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
          });
        setIsLoading(false)
    }, [])

    return {
        user,
        isLoading,setIsLoading,
        signInUsingGoogle,
        logOut
    }


}


export default useFirebase