import { axiosPriaveteInstance } from "../Api/axiosApi";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPriaveteInstance = () => {
    const refresh = useRefreshToken();
    const {auth} = useAuth();

    useEffect(()=>{

      const requestIntercept = axiosPriaveteInstance.interceptors.request.use(
        config => {
          if(!config.headers['Authorization']){
            config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
          }
          return config;
        },
        (error) => Promise.reject(error)
      );

      const responsIntercept = axiosPriaveteInstance.interceptors.response.use(
        response => response,
        async (error) => {
          const prevRequest = error?.config;
          if (error?.response?.status === 401 && !prevRequest?.sent ){
            prevRequest.sent = true;
            const newAccessToken = await refresh();
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return axiosPriaveteInstance(prevRequest);
          }

          return Promise.reject(error);
        }
      )

      return () =>{
        axiosPriaveteInstance.interceptors.request.eject(requestIntercept);
        axiosPriaveteInstance.interceptors.response.eject(responsIntercept);
      }

    },[auth, refresh])

    
  return axiosPriaveteInstance
}

export default useAxiosPriaveteInstance; 