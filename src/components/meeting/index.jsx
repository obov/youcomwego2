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
        <img
          src="https://picsum.photos/150/200"
          width={150}
          height={200}
          className="cursor-pointer"
          onClick={() => navigate("/meeting/1")}
        />
        모임장: 홍길동
        <div style={{ display: "flex" }}>
          <div style={{ width: 120, height: 30, border: "solid 1px skyblue" }}>
            모임 이름
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              className="w-6 h-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            좋아요
          </button>
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
        <img
          src="https://picsum.photos/150/200"
          width={150}
          height={200}
          className="cursor-pointer"
          onClick={() => navigate("/meeting/1")}
        />
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
