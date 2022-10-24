import Meetings from "../components/meeting/Meetings";

const Main = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div> {"<"} </div>
        <Meetings />
        <div> {">"} </div>
      </div>
    </div>
  );
};

export default Main;
