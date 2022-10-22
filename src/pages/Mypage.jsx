import React from "react";
import Meeting from "../components/meeting";

const Mypage = () => {
  return (
    <>
      {["좋아요", "참여"].map((e) => (
        <React.Fragment key={e}>
          {e}
          <div style={{ display: "flex" }}>
            {[1, 2, 3].map((e) => (
              <Meeting key={e} mypage />
            ))}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Mypage;
