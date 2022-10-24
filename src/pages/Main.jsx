import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Meetings from "../components/meeting/Meetings";
import { getMeetings } from "../redux/modules/meetingsReducer";

const Main = () => {
  return (
    <div className="flex justify-between">
      <div> {"<"} </div>
      <Meetings />
      <div> {">"} </div>
    </div>
  );
};

export default Main;
