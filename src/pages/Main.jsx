import { useSelector } from "react-redux";
import Meeting from "../components/Meeting";
const Main = ({ router }) => {
  const meetings = useSelector((state) => state.meetings.data);
  // 테스트용
  // const meetings = [{
  //   meetingId: 1, 
  //   userId: 1,
  //   nickname : `test`,
  //   title : `너만 오면`,
  //   likeCount : 1,
  //   participateCount : 3,
    
  //   Like:[
  //    {
  //   meetingId : 1,
  //   userId : 1,
  //    }
  //   ]
  //  },
  //  {
  //   meetingId : 2, 
  //   userId: 1,
  //   nickname : `test`,
  //   title : `너가 안오면`,
  //   likeCount : 1, 
  //   participateCount : 0,
    
  //   Like:[
  //    {
  //   meetingId : 2,
  //   userId : 1,
  //    }
  //  ]
  //  },]
   
  return (
    <div className="flex justify-between">
      <div className="w-full overflow-auto">
        <div className="flex w-fit gap-3 p-2">
          {meetings.map((meeting) => (
            <Meeting key={meeting.meetingId} main meeting={meeting} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
