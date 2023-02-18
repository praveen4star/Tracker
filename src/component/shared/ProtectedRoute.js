import { Navigate } from "react-router-dom";
import  AuthContext  from "./AuthContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, accessBy }) => {
  const navigate = useNavigate();
  const {user}= useContext(AuthContext);

  if (accessBy == "non-authenticated") {
    if (!user) {
      return children;
    }
  } else if (accessBy === "authenticated") {
    if (user) {
      return children;
    }
  }


  return <Navigate to="/"></Navigate>;
};

export default ProtectedRoute;