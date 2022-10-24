<<<<<<< HEAD
import Meetings from "../components/meeting/Meetings";

const Main = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div> {"<"} </div>
        <Meetings />
        <div> {">"} </div>
      </div>
=======
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
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
    </div>
  );
};

export default Main;
