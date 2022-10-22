import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const isDev = process.env.NODE_ENV === "development";
  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate("/");
  };
  const handleClickMyPage = () => {
    navigate("/mypage");
  };
  return (
    <>
      {isDev ? (
        <>
          <div className="h-20 fixed top-96 border border-red-900">
            <div>임시로 만든 부분입니다</div>
            <div className="flex gap-4">
              <button onClick={() => navigate("/")}>main</button>
              <button onClick={() => navigate("/enter")}>login</button>
              <button onClick={() => navigate("/mypage")}>mypage</button>
              <button onClick={() => navigate("/meeting/1")}>meeting</button>
            </div>
          </div>
        </>
      ) : null}
      <div className="bg-slate-50 w-full h-screen">
        <div className="w-1/2 h-full bg-zinc-100 mx-auto min-w-[300px] pt-14">
          <div className="fixed w-full bg-gray-800 h-12 top-0 left-0 ">
            <div className="w-1/2 px-11 flex mx-auto justify-between mt-3 min-w-[300px]">
              <div
                className="text-white cursor-pointer"
                onClick={handleClickLogo}
              >
                logo
              </div>
              <div
                className="text-white cursor-pointer"
                onClick={handleClickMyPage}
              >
                mypage
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
