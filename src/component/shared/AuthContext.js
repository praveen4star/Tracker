import axios from "axios";
import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("tokens")) {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      return jwt_decode(tokens);
    }
    return null;
  });

  
  
  const navigate = useNavigate();

  const login = async (payload) => {
    const apiResponse = await axios.post(
      "http://localhost:9000/api/users/login",
      payload
    );
    localStorage.setItem("tokens", JSON.stringify(apiResponse?.data?.authToken));
    setUser(jwt_decode(apiResponse?.data?.authToken));
    navigate("/dashboard");
    };




  const logout = async () => {
    localStorage.removeItem("tokens");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{user,login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;