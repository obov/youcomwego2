import { useSelector } from "react-redux";
import Meeting from ".";

const Meetings = () => {
  const meetings = useSelector((state) => state.meetings);
  console.log(meetings);
  return (
    <div className="flex flex-wrap justify-center">
      {meetings.data?.map((meeting) => (
        <Meeting key={meeting.meetingId} meeting={meeting} main />
      ))}
    </div>
  );
};

export default Meetings;
