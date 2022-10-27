import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Meeting from "../components/Meeting";
import useAuth from "../hooks/useAuth";
const Main = ({ router }) => {
  const meetings = useSelector((state) => state.meetings);
  // 테스트용
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();
  const { getTokens } = useAuth();
  const handleClick = () => {
    navigate("meeting/make");
  };
  const handleClickTest = () => {
    const req = async () => {
      const { data } = await axios(apiBaseUrl + "meetings", {
        headers: { auth: JSON.stringify(getTokens) },
      });
    };
    req();
  };
  console.log("meetings : ", meetings);

  return (
    <div className="flex justify-between">
      <div className="w-full overflow-auto">
        <button
          onClick={handleClick}
          className="bg-gray-800 hover:bg-black text-white font-bold w-20 h-9 mt-2 
            rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          글쓰기
        </button>
        <div className="flex w-fit gap-3 p-2">
          {meetings?.data?.map((meeting) => (
            <Meeting key={meeting.meetingId} main meeting={meeting} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
