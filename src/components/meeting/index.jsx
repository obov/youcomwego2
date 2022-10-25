import { useNavigate } from "react-router-dom";

const Meeting = ({ main, mypage }) => {
  const navigate = useNavigate();
  if (main)
    return (
      <div 
      className="w-52 h-68 border border-orange-300 
      rounded-lg mt-10 ml-5 items-center">
        {/* // style={{
        //   width: 200,
        //   height: 300,
        //   border: "solid 1px salmon",
        //   display: "flex",
        //   alignItems: "center",
        //   flexDirection: "column",
        // }} */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
        </svg>
        모여라
        <div
        className="w-full h-52 border border-blue-500
        rounded-lg items-center"
          // style={{
          //   width: 150,
          //   height: 200,
          //   border: "solid 1px darkblue",
          //   cursor: "pointer",
          // }}
          onClick={() => navigate("/meeting/1")}
        ></div>
        모임장: 홍길동
        <div style={{ display: "flex" }}>
          <div className="w-24 border border-blue-300">
          {/* style={{ width: 120, height: 30, border: "solid 1px skyblue" }} */}
            모임 이름  
          </div>
          <button class="ml-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            {/* 좋아요 */}
          </button>
          <button class="ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-6 h-6">
              <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
            </svg>
            {/* 참여하기 */}
          </button>
        </div>
      </div>
    );
  // if (mypage)
  //   return (
  //     <div
  //       style={{
  //         width: 200,
  //         height: 300,
  //         border: "solid 1px salmon",
  //         display: "flex",
  //         alignItems: "center",
  //         flexDirection: "column",
  //       }}
  //     >
  //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-6 h-6">
  //         <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
  //       </svg>
  //       모여라
  //       <div
  //         style={{
  //           width: 150,
  //           height: 200,
  //           border: "solid 1px darkblue",
  //           cursor: "pointer",
  //         }}
  //         onClick={() => navigate("/meeting/1")}
  //       ></div>
  //       모임장: 홍길동
  //       <div style={{ display: "flex" }}>
  //         <div style={{ width: 120, height: 30, border: "solid 1px skyblue" }}>
  //           모임 이름
  //         </div>
  //         <button>
  //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6">
  //             <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  //           </svg>
  //           {/* 좋아요 */}
  //         </button>
  //       </div>
  //     </div>
  //   );
};

export default Meeting;