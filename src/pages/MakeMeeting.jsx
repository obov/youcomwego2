import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const MakeMeeting = () => {
  const handleClickTitleEdit = () => {
    console.log("title");
  };
  const [previews, setPreviews] = useState({ contentUrls: [], selected: 0 });
  const { register, handleSubmit, watch, setValue } = useForm();

  const photo = watch("photo"); //Filelist
  const onValid = console.log;
  const handleClickSmallPreview = (previewIndex) => () => {
    setPreviews((cur) => ({ ...cur, selected: previewIndex }));
  };
  const handleClickSmallPreviewDelete = (previewIndex) => () => {
    setPreviews((cur) => ({ ...cur, selected: previewIndex }));
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
    <form className="flex flex-col gap-2 px-2" onSubmit={handleSubmit(onValid)}>
      <div className="flex justify-between">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="제목을 입력해주세요"
          {...register("title")}
        />
      </div>
      <div className="basis-1/3 flex justify-between items-center">
        {/* {previews.contentUrls.length !== 0 ? ( */}
        <div className="relative">
          <img
            layout="fill"
            src={previews.contentUrls[previews.selected]}
            className="w-full text-gray-600 h-48 rounded-md object-cover"
            alt=""
          />
        </div>
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
      <div className="h-20 border border-emerald-800 flex">
        {previews.contentUrls.length !== 0 &&
          previews.contentUrls.map((url, i) => (
            <div className="relative group cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 hover:ring-2 hover:ring-pink-400 ease-in cursor-pointer">
                X
              </div>
              <img
                key={url + i}
                layout="fill"
                src={url}
                className="w-16 text-gray-600 h-16 rounded-md object-cover"
                alt=""
                onClick={handleClickSmallPreview(i)}
              />
            </div>
          ))}
        <label className="w-6 h-6 bg-slate-300 flex justify-center items-center cursor-pointer">
          +
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
