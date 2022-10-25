import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Meeting from "../components/Meeting";
import { getMeetings } from "../redux/modules/meetingsReducer";

const Mypage = () => {
  const { data } = useSelector((state) => state.meetings);
  console.log(data);
  return (
    <>
      {["좋아요", "참여"].map((e) => (
        <React.Fragment key={e}>
          {e}
          <div className="overflow-auto">
            <div className="flex w-fit gap-3 p-2">
              {data.map((meeting, i) => (
                <Meeting key={i} mypage meeting={meeting} />
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
export default Mypage;
