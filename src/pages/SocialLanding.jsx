import { useEffect, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Bad from "./Bad";

const SocialLanding = () => {
  const { isAuth, setTokens } = useAuth();
  const { tokens } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [navigate, isAuth]);
  try {
    const [[, acc], [, ref]] = tokens.split("@").map((e) => e.split("="));
    setTokens(acc, ref);
    return <div>SocialLanding</div>;
  } catch {
    return <Bad />;
  }
};

export default SocialLanding;
