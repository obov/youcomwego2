import { useEffect, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Bad from "./Bad";

const SocialLanding = () => {
  const { isAuth } = useAuth();
  const { tokens } = useParams();
  const { setTokens } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [navigate]);
  try {
    const [[, acc], [, ref]] = tokens.split("@").map((e) => e.split("="));
    setTokens(acc, ref);
    return <div>SocialLanding</div>;
  } catch {
    return <Bad />;
  }
};

export default SocialLanding;
