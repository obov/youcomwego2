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
              <button>좋아요</button>
              <button>참여</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ border: "solid 1px black" }}>
        {[1, 2, 3, 4].map((e) => (
          <Comment key={e} />
        ))}
      </div>
    </>
  );
};

export default MeetingRoom;
