import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../components/Comment";
import { getMeetings } from "../redux/modules/meetingsReducer";

const MeetingRoom = () => {
  const meetings = useSelector((state) => state.meetings);
  console.log(meetings);
  return (
    <div className="h-full">
      <h1>제목</h1>
      <div className="flex flex-col">
        <div className="basis-1/3 flex justify-between items-center">
          <div>{"<"}</div>
          <img
            width={200}
            height={250}
            src={"https://picsum.photos/200/250"}
          ></img>
          <div>{">"}</div>
        </div>
        <div className="border border-black">
          <button>좋아요</button>
          <button>참여</button>
        </div>
        <div>
          <div className="border border-black h-40">일시 장소 설명</div>
        </div>
      </div>
      <div style={{ border: "solid 1px black" }}>
        {meetings?.data?.map((e, i) => (
          <Comment key={i} />
        ))}
      </div>
    </div>
  );
};

export default MeetingRoom;
