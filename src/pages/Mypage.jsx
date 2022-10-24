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
    </>
  );
};
export default Mypage;
