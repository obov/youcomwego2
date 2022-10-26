import axios from "axios";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(
    Boolean(
      localStorage.getItem("accessToken") &&
        localStorage.getItem("refreshToken")
    )
  );
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const getTokens = {
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
  };
  const setTokens = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };
  const postLogin = async (payload) => {
    const {
      data: { accessToken, refreshToken },
    } = await axios.post(apiBaseUrl + "login", payload);
    if (accessToken && refreshToken) {
      setTokens(accessToken, refreshToken);
    }
  };
  const postSignup = async (payload) => {
    const { data } = await axios.post(apiBaseUrl + "signup", payload);
    console.log("data(in useAuth) : ", data);
  };

  const removeTokens = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  setInterval(() => {
    if (
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken")
    ) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, 300);
  useEffect(() => {
    console.log(isAuth);
  }, [isAuth]);
  return { isAuth, postLogin, postSignup, removeTokens, setTokens, getTokens };
};

export default useAuth;
