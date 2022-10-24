import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
// import {Diversity3Icon} from '@mui/icons-material/Diversity3';
=======
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061

const Layout = ({ children }) => {
  const isDev = process.env.NODE_ENV === "development";
  const navigate = useNavigate();
  const handleClickLogo = () => {
<<<<<<< HEAD
    navigate("/");
  };
  const handleClickMyPage = () => {
    navigate("/mypage");
=======
    if (localStorage.getItem("login") === "true") {
      navigate("/");
    }
  };
  const handleClickMyPage = () => {
    if (localStorage.getItem("login") === "true") {
      navigate("/mypage");
    }
  };
  const handleClickLogout = () => {
    localStorage.setItem("login", "false");
    navigate("/enter");
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
  };
  return (
    <>
      {isDev ? (
        <>
<<<<<<< HEAD
          <div className="h-20 fixed top-96 border border-red-900">
            <div>임시로 만든 부분입니다</div>
            <div className="flex gap-4">
              <button onClick={() => navigate("/")}>main</button>
              <button onClick={() => navigate("/enter")}>login</button>
              <button onClick={() => navigate("/mypage")}>mypage</button>
              <button onClick={() => navigate("/meeting/1")}>meeting</button>
=======
          <div className="fixed top-24 border border-red-900">
            <div>임시로 만든 부분입니다</div>
            <div className="flex flex-col gap-4">
              <button
                onClick={() =>
                  localStorage.getItem("login") === "true" && navigate("/")
                }
              >
                main
              </button>
              <button onClick={() => navigate("/enter")}>login</button>
              <button
                onClick={() =>
                  localStorage.getItem("login") === "true" &&
                  navigate("/mypage")
                }
              >
                mypage
              </button>
              <button
                onClick={() =>
                  localStorage.getItem("login") === "true" &&
                  navigate("/meeting/1")
                }
              >
                meeting
              </button>
              <button
                onClick={() =>
                  localStorage.getItem("login") === "true" &&
                  navigate("/makemeeting")
                }
              >
                makemeeting
              </button>
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
            </div>
          </div>
        </>
      ) : null}
<<<<<<< HEAD
      <div className="bg-slate-50 w-full h-screen">
        <div className="w-1/2 h-full bg-zinc-100 mx-auto min-w-[300px] pt-14">
          <div className="fixed w-full bg-gray-800 h-15 top-0 left-0 ">
            <div className="w-1/2 px-11 flex mx-auto justify-between mt-3 min-w-[300px]">
=======
      <div className="bg-slate-50 w-full">
        <div className="w-1/2 h-full bg-zinc-100 mx-auto min-w-[300px] pt-24">
          <div className="fixed w-full bg-slate-800 h-20 top-0 left-0 z-10">
            <div className="w-1/2 px-11 flex mx-auto items-center justify-between mt-3 min-w-[300px]">
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
              <div
                className="text-white cursor-pointer"
                onClick={handleClickLogo}
              >
<<<<<<< HEAD
                {/* <Diversity3Icon
                size="24"
                onClick={handleClickLogo}
                /> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
                logo
              </div>
              <div
                className="text-white cursor-pointer"
                onClick={handleClickMyPage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                </svg>

                mypage
              </div>
            </div>
          </div>
          {children}
=======
                logo
              </div>
              <div>
                <div
                  className="text-white cursor-pointer"
                  onClick={handleClickLogout}
                >
                  logout
                </div>
                <div
                  className="text-white cursor-pointer"
                  onClick={handleClickMyPage}
                >
                  mypage
                </div>
              </div>
            </div>
          </div>
          <div className="w-[95%] mx-auto h-screen">{children}</div>
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default Layout;
=======
export default Layout;
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
