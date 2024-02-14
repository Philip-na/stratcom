import axiosInstance from "../Api/axiosApi";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();

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
  return logout;
};

export default useLogout;
