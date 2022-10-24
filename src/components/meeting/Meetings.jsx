<<<<<<< HEAD
import Meeting from ".";

const Meetings = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {[1, 2, 3, 4].map((e) => (
        <Meeting key={e} main />
=======
import { useSelector } from "react-redux";
import Meeting from ".";

const Meetings = () => {
  const meetings = useSelector((state) => state.meetings);
  console.log(meetings);
  return (
    <div className="flex flex-wrap justify-center">
      {meetings.data?.map((meeting) => (
        <Meeting key={meeting.meetingId} meeting={meeting} main />
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
      ))}
    </div>
  );
};

export default Meetings;
