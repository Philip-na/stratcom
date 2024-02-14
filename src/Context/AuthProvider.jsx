import { createContext, useState } from "react";
import axiosInstance from "../Api/axiosApi";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) =>{
    const [auth, setAuth] = useState({});


    const logout = async () => {
        setAuth({});
        try {
          const response = await axiosInstance(
            "/logout",
            {},
            { withCredentials: true }
          );
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <AuthContext.Provider value={{ auth, setAuth, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;