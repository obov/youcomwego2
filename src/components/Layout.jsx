import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const isDev = process.env.NODE_ENV === "development";
  const navigate = useNavigate();
  const handleClickLogo = () => {
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
  };
  return (
    <>
      {isDev ? (
        <>
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
            </div>
          </div>
        </>
      ) : null}
      <div className="bg-slate-50 w-full">
        <div className="w-1/2 h-full bg-zinc-100 mx-auto min-w-[300px] pt-24">
          <div className="fixed w-full bg-slate-800 h-20 top-0 left-0 z-10">
            <div className="w-1/2 px-11 flex mx-auto items-center justify-between mt-3 min-w-[300px]">
              <div
                className="text-white cursor-pointer"
                onClick={handleClickLogo}
              >
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
        </div>
      </div>
    </>
  );
};

export default Layout;
