import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMeetings } from "../../redux/modules/meetingsReducer";

const Meeting = ({ main, mypage, meeting }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate("/meeting/" + meeting.meetingId);
    dispatch(selectMeetings(meeting));
  };
  if (main)
    return (
      <div
        style={{
          width: 200,
          height: 300,
          border: "solid 1px salmon",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {meeting.title}
        <img
          width={200}
          height={250}
          src={"https://picsum.photos/200/300"}
          className="cursor-pointer"
          onClick={handleClick}
        ></img>
        모임장: {meeting.nickname}
        <div style={{ display: "flex" }}>
          <div style={{ width: 120, height: 30, border: "solid 1px skyblue" }}>
            모임 이름
          </div>
          <button>좋아요</button>
        </div>
      </div>
    );
  if (mypage)
    return (
      <div
        style={{
          width: 200,
          height: 300,
          border: "solid 1px salmon",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {meeting.title}
        <img
          width={200}
          height={250}
          src={"https://picsum.photos/200/250"}
          className="cursor-pointer"
          onClick={handleClick}
        ></img>
        모임장: {meeting.nickname}
        <div style={{ display: "flex" }}>
          <div style={{ width: 120, height: 30, border: "solid 1px skyblue" }}>
            모임 이름
          </div>
          <button>좋아요</button>
        </div>
      </div>
    );
};

export default Meeting;
