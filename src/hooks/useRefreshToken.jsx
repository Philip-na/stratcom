import axiosInstance from "../Api/axiosApi";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axiosInstance.post("token/refresh/",{},{withCredentials: true});

    setAuth((prev) => {
      return { 
        ...prev,
        user: response?.data?.user,
        accessToken: response?.data?.access_token };
    });
    return response.data.access_token;
  };

  return refresh
};

export default useRefreshToken;
