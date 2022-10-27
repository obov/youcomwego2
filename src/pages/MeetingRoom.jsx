import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../components/Comment";
import { useEffect } from "react";
import { selectMeetings } from "../redux/modules/meetingsReducer";
import { useState } from "react";
import axios from "axios";
import { getToken } from "../redux/util";
import { useForm } from "react-hook-form";

const MeetingRoom = () => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const { id } = useParams();
  const dispatch = useDispatch();
  const meetings = useSelector((state) => state.meetings);

  const [comments, setComments] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onValid = ({ comment }) => {
    const req = async () => {
      const { data } = await axios.post(
        apiBaseUrl + "comments/" + id,
        {
          comment,
        },
        { headers: { auth: JSON.stringify(getToken()) } }
      );
    };
    req();
    setComments((cur) => [...cur, comment]);
    reset();
  };
  useEffect(() => {
    if (meetings.data.length > 0 && !meetings.selected) {
      dispatch(selectMeetings({ meetingId: +id }));
    }
  }, [meetings]);
  useEffect(() => {
    const func = async () => {
      const { data } = await axios(apiBaseUrl + "comments/" + id, {
        headers: { auth: JSON.stringify(getToken()) },
      });
      setComments((cur) => [...data.result]);
    };
    func();
  }, [comments.length]);

  const { selected } = meetings;
  console.log(comments);
  return (
    <div className="flex flex-col gap-2 px-2">
      <h1 className="text-3xl">{selected?.title}</h1>
      <div className="basis-1/3 flex justify-center items-center">
        <img
          src="https://picsum.photos/300/240"
          width={300}
          height={240}
          className="cursor-pointer"
        />
      </div>
      <div className="h-20 w-full border border-emerald-800 flex">
        {[1, 2, 3].map((image) => (
          <img
            key={image}
            src="https://picsum.photos/80/80"
            width={80}
            height={80}
            className="cursor-pointer"
          />
        ))}
      </div>
      <div className="w-full h-40 border">{selected?.content}</div>
      <div className="flex flex-col h-full gap-2">
        {comments?.map((comment) => (
          <Comment key={comment.commentId} {...comment} />
        ))}
        <form
          onSubmit={handleSubmit(onValid)}
          className="flex flex-row justify-center gap-2 mt-2"
        >
          <input
            className="w-full py-2 px-3"
            type="text"
            {...register("comment", { required: "comment required!" })}
          />
          <button
            className="bg-gray-800 hover:bg-black text-white font-bold w-10
            rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            등록
          </button>
        </form>
        <div className="flex flex-row justify-center gap-2 mt-2">
          <button
            className="bg-gray-800 hover:bg-black text-white font-bold w-10
            rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            수정
          </button>
          <button
            className="bg-gray-800 hover:bg-black text-white font-bold w-10
            rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            목록
          </button>
          <button
            className="bg-gray-800 hover:bg-black text-white font-bold w-10
            rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;
