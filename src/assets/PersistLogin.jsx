import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import useLocalStorage from "../hooks/useLocalStorage";


const PersistLogin = () => {
  const [isLoading, setIsloading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  const [trust] = useLocalStorage('trust', false)

  useEffect(() => {
    let isMouted = true;

    const checkRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        isMouted && setIsloading(false);
      }
    };

    !auth?.accessToken ? checkRefreshToken() : setIsloading(false);

    return () => isMouted = false;
  }, []);

  return (
    <>{!trust ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
  );
};

export default PersistLogin;
