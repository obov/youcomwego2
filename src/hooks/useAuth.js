import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("accessToken") && localStorage.getItem("refreshToken")
  );
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

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

  return { isAuth, postLogin, postSignup, removeTokens };
};

export default useAuth;
