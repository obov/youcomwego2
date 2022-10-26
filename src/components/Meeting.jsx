import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMeetings } from "../redux/modules/meetingsReducer";
const Meeting = ({
  main,
  mypage,
  meeting: { meetingId, nickname, title, likeCount, participateCount },
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickImg = () => {
    navigate(`/meeting/${meetingId}`);
    dispatch(selectMeetings({ meetingId }));
  };
  if (main)
    return (
      <div className="w-96 h-80 flex flex-col justify-around items-center bg-stone-200 p-2 rounded-lg gap-2">
        <div className="w-full flex items-center justify-between px-3">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div>
            <span className="text-sm font-bold">모임장 </span>
            <span className="text-xl font-semibold">{nickname}</span>
          </div>
        </div>
        <div className="flex gap-2 justify-around w-full">
          <div>
            <img
              src="https://picsum.photos/300/240"
              width={300}
              height={240}
              className="cursor-pointer"
              onClick={handleClickImg}
            />
          </div>
          <div className=" flex flex-col gap-4 justify-center">
            <button className="flex gap-1 flex-col rounded-2xl p-1 ease-in-out transition-all active:bg-stone-500 bg-stone-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                className="w-9 h-9"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              <div className="w-full flex justify-center text-2xl">
                {likeCount}
              </div>
            </button>
            <button className="flex gap-1 flex-col rounded-2xl p-1 ease-in-out transition-all active:bg-stone-500 bg-stone-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                />
              </svg>
              <div className="w-full flex justify-center text-2xl">
                {participateCount}
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  if (mypage)
    return (
      <div className="w-96 h-80 flex flex-col justify-around items-center bg-stone-200 p-2 rounded-lg gap-2">
        <div className="w-full flex items-center justify-between px-3">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div>
            <span className="text-sm font-bold">모임장 </span>
            <span className="text-xl font-semibold">{nickname}</span>
          </div>
        </div>
        <div className="flex gap-2 justify-around w-full">
          <div>
            <img
              src="https://picsum.photos/300/240"
              width={300}
              height={240}
              className="cursor-pointer"
              onClick={() => navigate(`/meeting/${meetingId}`)}
            />
          </div>
          <div className=" flex flex-col gap-4 justify-center">
            <button className="flex gap-1 flex-col rounded-2xl p-1 ease-in-out transition-all active:bg-stone-500 bg-stone-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                className="w-9 h-9"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              <div className="w-full flex justify-center text-2xl">
                {likeCount}
              </div>
            </button>
            <button className="flex gap-1 flex-col rounded-2xl p-1 ease-in-out transition-all active:bg-stone-500 bg-stone-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                />
              </svg>
              <div className="w-full flex justify-center text-2xl">
                {participateCount}
              </div>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Meeting;
