import { useSelector } from "react-redux";
import Meeting from "../components/Meeting";
const Main = ({ router }) => {
  const meetings = useSelector((state) => state.meetings.data);
  console.log(meetings);
  return (
    <div className="flex justify-between">
      <div> {"<"} </div>
      <div className="w-full overflow-auto">
        <div className="flex w-fit gap-3 p-2">
          {meetings.map((meeting) => (
            <Meeting key={meeting.meetingId} main meeting={meeting} />
          ))}
        </div>
      </div>
      <div> {">"} </div>
    </div>
  );
};

export default Main;
