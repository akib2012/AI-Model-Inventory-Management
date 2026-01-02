import React, { useEffect } from "react";
import Authcontext from "./Authcontext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut, 
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
import { useState } from "react";




const AuthProvide = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


  //  user singup
  const usersingup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  usersing in

  const usersignin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sign up/in
  const googlesingup = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

   

  // observer set here: 

useEffect(() => {
    const unsubcrive  = onAuthStateChanged(auth, (CurrentUser) => {
        console.log(CurrentUser);
        setUser(CurrentUser);
        setLoading(false);
        
    })
     return () =>{
            unsubcrive();
        }
  }, [])


  // singout here: 

  const singout = () =>{
    setLoading(true);
    return signOut(auth)
  }


  //  update profile here

  const updateprofile  = (userdata) =>{
    return updateProfile(auth.currentUser, userdata)
  }







  const Authinfo = {
    name: "akib bhai in towen",
    usersingup,
    usersignin,
    googlesingup,
    user,
    setUser,
    singout,
    updateprofile,
    loading,
    setLoading,

  };




  return (
    <Authcontext.Provider value={Authinfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvide;
