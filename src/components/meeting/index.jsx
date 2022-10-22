import { useNavigate } from "react-router-dom";

const Meeting = ({ main, mypage }) => {
  const navigate = useNavigate();
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
        모여라
        <div
          style={{
            width: 150,
            height: 200,
            border: "solid 1px darkblue",
            cursor: "pointer",
          }}
          onClick={() => navigate("/meeting/1")}
        ></div>
        모임장: 홍길동
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
        모여라
        <div
          style={{
            width: 150,
            height: 200,
            border: "solid 1px darkblue",
            cursor: "pointer",
          }}
          onClick={() => navigate("/meeting/1")}
        ></div>
        모임장: 홍길동
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
