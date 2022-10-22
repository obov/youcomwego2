import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Enter from "./pages/Enter";
import MeetingRoom from "./pages/MeetingRoom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Main />} />
        <Route path="enter" element={<Enter />} />
        <Route path="mypage" element={<Mypage />} />
        <Route path="meeting/:id" element={<MeetingRoom />} />
      </Routes>
    </Layout>
  );
}

export default App;
