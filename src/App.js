import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Enter from "./pages/Enter";
import MeetingRoom from "./pages/MeetingRoom";
import MakeMeeting from "./pages/MakeMeeting";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMeetings, resetMeetings } from "./redux/modules/meetingsReducer";
import "tailwindcss/tailwind.css";

export const PATHS = {
  INDEX: "/",
  ENTER: "enter",
  MYPAGE: "mypage",
  MEETING: {
    toString: () => "meeting",
    MAKE: "meeting/make",
  },
};
function App() {
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    if (pathname !== "/enter") {
      dispatch(getMeetings());
    } else {
      dispatch(resetMeetings());
    }
  }, [pathname, dispatch]);

  return (
    <Layout>
      <Routes>
        <Route index element={<Main />} />
        <Route path="enter" element={<Enter />} />
        <Route path="mypage" element={<Mypage />} />
        <Route path="meeting">
          <Route path=":id" element={<MeetingRoom />} />
          <Route path="make" element={<MakeMeeting />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
