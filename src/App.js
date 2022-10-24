<<<<<<< HEAD
// import logo from "./logo.svg";
// import "tailwindcss/tailwind.css";

// export default function App() {
//   return <svg 
//   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
//   </svg> 
//   return <button
//   class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
//   >
//   Hello, Tailwind CSS!
// </button>;

//}

import { Route, Routes } from "react-router-dom";
=======
import { Route, Routes, useLocation, useParams } from "react-router-dom";
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Enter from "./pages/Enter";
import MeetingRoom from "./pages/MeetingRoom";
<<<<<<< HEAD
import "tailwindcss/tailwind.css";

function App() {
=======
import MakeMeeting from "./pages/MakeMeeting";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMeetings, resetMeetings } from "./redux/modules/meetingsReducer";

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
  useEffect(() => {
    return () => {
      console.log("unmount");
      localStorage.setItem("login", "false");
    };
  }, []);
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
  return (
    <Layout>
      <Routes>
        <Route index element={<Main />} />
        <Route path="enter" element={<Enter />} />
        <Route path="mypage" element={<Mypage />} />
        <Route path="meeting/:id" element={<MeetingRoom />} />
<<<<<<< HEAD
=======
        <Route path="makemeeting" element={<MakeMeeting />} />
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
      </Routes>
    </Layout>
  );
}

export default App;
