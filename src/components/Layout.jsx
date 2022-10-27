import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "../App";
import useAuth from "../hooks/useAuth";

const Layout = ({ children }) => {
  const isDev = process.env.NODE_ENV === "development";
  const { pathname } = useLocation();
  const { isAuth, removeTokens } = useAuth();
  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate(PATHS.INDEX);
  };
  const handleClickMyPage = () => {
    navigate(PATHS.MYPAGE);
  };
  const handleClickLogOut = () => {
    removeTokens();
  };

  //useEffect(() => {
  //   if (!isAuth) {
  //     navigate(PATHS.ENTER);
  //   } else {
  //     navigate(PATHS.INDEX);
  //   }
  // }, [isAuth]);
  return (
    <>
      {isDev ? (
        <>
          <div className="h-20 fixed top-40 border  ">
            <div>임시로 만든 부분입니다</div>
            <div className="flex gap-4 flex-col border border-red-900">
              <button onClick={() => navigate(PATHS.INDEX)}>main</button>
              <button onClick={() => navigate(PATHS.ENTER)}>login</button>
              <button onClick={() => navigate(PATHS.MYPAGE)}>mypage</button>
              <button onClick={() => navigate(PATHS.MEETING + "/1")}>
                meeting
              </button>
              <button onClick={() => navigate(PATHS.MEETING.MAKE)}>
                make meeting
              </button>
            </div>
          </div>
        </>
      ) : null}
      <div className="bg-slate-50 w-full h-[150vh]">
        <div className="w-1/2 h-full bg-zinc-100 mx-auto min-w-[300px] pt-20">
          <div className="fixed w-full bg-gray-800 h-20 top-0 left-0 z-10">
            <div className="px-11 flex mx-auto justify-between mt-3 min-w-[300px]">
              <div
                className="text-white cursor-pointer flex flex-col items-center"
                onClick={handleClickLogo}
              >
                <div className="group w-10 h-10 bg-gray-800 rounded-md shadow-lg flex flex-row hover:bg-red-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                      clipRule="evenodd"
                    />
                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-2">
                {isAuth ? (
                  <div
                    className="text-white cursor-pointer flex flex-col items-center"
                    onClick={handleClickMyPage}
                  >
                    <div className="group w-10 h-10 bg-gray-800 rounded-md shadow-lg flex flex-row hover:bg-red-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-8 h-8"
                      >
                        <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                      </svg>
                    </div>
                  </div>
                ) : null}
                {isAuth ? (
                  <div
                    className="text-white cursor-pointer flex flex-col items-center ml-5"
                    onClick={handleClickLogOut}
                  >
                    <div className="group w-10 h-10 bg-gray-800 rounded-md shadow-lg flex flex-row hover:bg-red-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 
                      0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 
                      0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
