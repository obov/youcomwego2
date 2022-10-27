import { useEffect, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { getToken } from "../redux/util";
import Bad from "./Bad";

const SocialLanding = () => {
  const { isAuth, setTokens, setIsAuth } = useAuth();
  const { tokens } = useParams();
  const navigate = useNavigate();

  console.log("social");
  const [[, acc], [, ref]] = tokens.split("@").map((e) => e.split("="));
  setTokens(acc, ref);
  useEffect(() => {
    if (getToken().accessToken && getToken().refreshToken) navigate("/");
  }, []);
  return <div>SocialLanding</div>;
};

export default SocialLanding;
