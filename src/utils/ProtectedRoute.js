import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, accessBy }) => {
  const {user}= useSelector((state)=>state.auth);

  if (accessBy === "non-authenticated") {
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