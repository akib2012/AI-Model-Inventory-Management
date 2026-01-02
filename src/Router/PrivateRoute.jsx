import React, { useContext } from 'react';
import Authcontext from '../ContextAuth/Authcontext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner';

const PrivateRoute = ({ children }) => {
  const { user, loading  } = useContext(Authcontext);

  const loaction = useLocation()
  // console.log(loaction.pathname);

  if(loading){
   return <LoadingSpinner></LoadingSpinner>;
  }

  if (user) {
     return <>{children}</>;
  
  }
 
    return <Navigate state={location?.pathname}  to="/login" ></Navigate>;
};

export default PrivateRoute;
