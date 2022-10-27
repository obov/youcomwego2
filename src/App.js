import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Enter from "./pages/Enter";
import MeetingRoom from "./pages/MeetingRoom";
import MakeMeeting from "./pages/MakeMeeting";
import { useDispatch } from "react-redux";
import { useEffect, useLayoutEffect } from "react";
import { getMeetings, resetMeetings } from "./redux/modules/meetingsReducer";
import "tailwindcss/tailwind.css";
import useAuth from "./hooks/useAuth";
import SocialLanding from "./pages/SocialLanding";
import { getToken } from "./redux/util";

export const PATHS = {
  INDEX: "/",
  ENTER: "/enter",
  MYPAGE: "/mypage",
  MEETING: {
    toString: () => "/meeting",
    MAKE: "/meeting/make",
  },
};
function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isAuth } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    if (pathname !== "/enter") {
      dispatch(getMeetings());
    } else {
      dispatch(resetMeetings());
    }
  }, [pathname, dispatch]);
  // 테스트할때는 주석처리
  useEffect(() => {
    if (
      !(getToken().accessToken && getToken().refreshToken) &&
      !pathname.includes("/enter")
    ) {
      navigate("/enter", { replace: true });
    }
  }, [isAuth, pathname]);
  // useLayoutEffect(() => {
  //   if (!isAuth) {
  //     console.log(isAuth);
  //     console.log("effect2");
  //     navigate("/enter", { replace: true });
  //   }
  // }, [isAuth, pathname]);
  return (
    <Layout>
      <Routes>
        <Route index element={<Main />} />
        <Route path="enter" element={<Enter />} />
        <Route path="enter/:tokens" element={<SocialLanding />} />
        <Route path="mypage" element={<Mypage />} />
        <Route path="meeting">
          <Route path=":id" element={<MeetingRoom />} />
          <Route path="make" element={<MakeMeeting />} />
        </Route>
        <Route path="kakao">// add.com/kakao/ioncfwoeihfnihnei
          <Route path=":id" element={<MeetingRoom />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
