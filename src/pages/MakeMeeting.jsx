import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const MakeMeeting = () => {
  const handleClickTitleEdit = () => {
    console.log("title");
  };
  const [previews, setPreviews] = useState({ contentUrls: [], selected: 0 });
  const { register, handleSubmit, watch, setValue } = useForm();
  const { getTokens } = useAuth();
  const headers = { Auth: JSON.stringify(getTokens) };

  const photo = watch("photo"); //Filelist
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const onValid = async (payload) => {
    const { data } = await axios.post(apiBaseUrl + "meetings", payload, {
      headers,
    });
    if (data.message === "게시글이 생성되었습니다") {
    }
    console.log("res : ", data); //API를 바꿔야할듯?
  };
  const handleClickSmallPreview = (previewIndex) => () => {
    setPreviews((cur) => ({ ...cur, selected: previewIndex }));
  };
  const handleClickSmallPreviewDelete = (previewIndex) => () => {
    setPreviews((cur) => ({
      ...cur,
      contentUrls: [
        ...cur.contentUrls.slice(0, previewIndex),
        ...cur.contentUrls.slice(previewIndex + 1),
      ],
    }));
    setValue("photo", [
      ...[...photo].slice(0, previewIndex),
      ...[...photo].slice(previewIndex + 1),
    ]);
  };

  useEffect(() => {
    setValue("photo", []);
  }, []);

  useEffect(() => {
    if (photo && photo.length > 0) {
      setPreviews((cur) => ({
        ...cur,
        contentUrls: [...[...photo].map((file) => URL.createObjectURL(file))],
      }));
    }
  }, [photo]);
  return (
    <form
      className="flex flex-col gap-2 px-2 mt-2"
      onSubmit={handleSubmit(onValid)}
    >
      <div className="flex justify-between">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="제목을 입력해주세요"
          {...register("title")}
        />
        <button
          className="bg-gray-800 hover:bg-black text-white font-bold w-[50px]
            rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          등록
        </button>
      </div>
      <div className="basis-1/3 flex relative">
        {previews.contentUrls.length !== 0 ? (
          <img
            layout="fill"
            src={previews.contentUrls[previews.selected]}
            className="w-full absolute text-gray-600 h-48 rounded-3xl object-contain"
            alt=""
          />
        ) : null}
        <label
          className={`w-full cursor-pointer text-gray-600 hover:bg-slate-600 hover:text-slate-200 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md ${
            previews.contentUrls.length !== 0 && "opacity-0 pointer-events-none"
          }`}
        >
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            {...register("photo", {
              validate: (photoList) => {
                return photoList.length < 2;
              },
            })}
            accept="image/*"
            className="hidden"
            type="file"
          />
        </label>
      </div>
      <div className="h-20 border border-emerald-800 flex items-center px-2 gap-2">
        {previews.contentUrls.length !== 0 &&
          previews.contentUrls.map((url, i) => (
            <div className="relative group cursor-pointer" key={url + i}>
              <div
                onClick={handleClickSmallPreviewDelete(i)}
                className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 hover:ring-2 hover:ring-black ease-in cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={6}
                  stroke="currentColor"
                  className="w-2 h-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <img
                layout="fill"
                src={url}
                className="w-16 text-gray-600 h-16 rounded-md object-cover"
                alt=""
                onClick={handleClickSmallPreview(i)}
              />
            </div>
          ))}
        <label className="w-6 h-6 flex justify-center items-center cursor-pointer text-zinc-400 hover:text-slate-200 rounded hover:bg-slate-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>

          <input
            onInput={({ target }) => {
              setValue("photo", [...photo, ...target.files]);
            }}
            accept="image/*"
            className="hidden"
            type="file"
          />
        </label>
      </div>
      <div className="w-full h-40">
        <textarea
          {...register("content")}
          placeholder="상세 설명란 입니다."
          className="resize-none h-full w-full"
        ></textarea>
      </div>
    </form>
  );
};

export default MakeMeeting;
