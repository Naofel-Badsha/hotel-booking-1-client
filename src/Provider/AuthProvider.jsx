import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
        
    }

    useEffect(() =>{
     const unSubascribe =  onAuthStateChanged(auth, currentUser =>{
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = {email: userEmail}
        console.log(currentUser)
          setUser(currentUser);
          setLoading(false);
          
          //---user---axxies a tocaken-----
          if(currentUser){
            axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
            .then(res => {
                console.log('token responces', res.data)
            })
          }
          else{
             axios.post('http://localhost:5000/logout', loggedUser, {
                withCredentials: true
             })
             .then(res => {
                console.log(res.data);
             })
          }
        });
        return() => {
            unSubascribe()
        }
    },[user])

    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;