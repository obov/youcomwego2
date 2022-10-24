<<<<<<< HEAD
import Comment from "../components/Comment";

const MeetingRoom = () => {
  return (
    <>
      <div>
        <h1>제목</h1>
        <div style={{ display: "flex", height: 200 }}>
          <div
            style={{
              flex: 2,
              border: "solid 1px darkgreen",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>{"<"}</div>
            <div>{">"}</div>
          </div>
          <div
            style={{
              flex: 3,
              border: "solid 1px darkgreen",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ flex: 4, border: "solid 1px darkseagreen" }}>
              일시 장소 설명
            </div>
            <div style={{ flex: 1, border: "solid 1px darkseagreen" }}>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                좋아요
              </button>

              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-6 h-6">
                  <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
                </svg>
                참여
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ border: "solid 1px black" }}>
        {[1, 2, 3, 4].map((e) => (
          <Comment key={e} />
        ))}
      </div>
=======
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Meeting from "../components/meeting";
import { getMeetings } from "../redux/modules/meetingsReducer";

const Mypage = () => {
  const meetings = useSelector((state) => state.meetings);

  return (
    <>
      {["좋아요", "참여"].map((e) => (
        <React.Fragment key={e}>
          {e}
          <div style={{ display: "flex" }}>
            {meetings.data?.map((e, i) => (
              <Meeting key={i} mypage meeting={e} />
            ))}
          </div>
        </React.Fragment>
      ))}
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
    </>
  );
};

<<<<<<< HEAD
export default MeetingRoom;
=======
export default Mypage;
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
