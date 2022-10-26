import { useState } from "react";
import { useForm } from "react-hook-form";
import { regOptEnter } from "../utils/validate";
import { useDispatch } from "react-redux";
import useAuth from "../hooks/useAuth";
import { useNavigate, useNavigation } from "react-router-dom";
import Kakao from "../icons/kakao";
import Google from "../icons/google";
import axios from "axios";

const Enter = () => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();
  const { postLogin, isAuth, postSignup } = useAuth();
  const dispatch = useDispatch();
  const [isLoging, setIsLoging] = useState(true);
  const handleClickKakao = async () => {
    // const res = await (await fetch(apiBaseUrl + "kakao")).json();
    // console.log(res);
    window.location.href = apiBaseUrl + "kakao";
  };
  const handleClick = () => {
    setIsLoging(!isLoging);
  };
  const handleClickLogin = (e) => {
    e.preventDefault();
    setIsLoging(true);
  };
  const handleClickSiginup = (e) => {
    e.preventDefault();
    setIsLoging(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    watch,
    formState: { errors: errosSignUp },
  } = useForm();
  const password = watch("password");
  const onValid = (data) => {
    postLogin(data);
  };
  const onValidSignUp = (data) => {
    console.log("data : ", data);
    postSignup(data);
  };
  return (
    <>
      {isLoging ? (
        <form onSubmit={handleSubmit(onValid)}>
          <div className="flex flex-row justify-center gap-2 mt-2">
            <input
              type="button"
              value="로그인"
              className="bg-blue-500 text-white font-extrabold w-40 py-2 px-3 mt-10
          pointer-events-none rounded-t-lg text-xs"
            />
            <input
              type="button"
              value="회원가입"
              onClick={handleClick}
              className="bg-slate-500 hover:text-slate-100 font-bold w-40 py-2 px-3 mt-10
            cursor-pointer rounded-t-lg shadow-md text-xs"
            />
          </div>
          <div className="bg-gray-100 flex flex-col items-center border-2 border-blue-500 shadow-md shadow-gray-600 mx-auto w-[90%] py-4 rounded">
            <div className="h-48 flex flex-col justify-center gap-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                E_Mail
              </label>
              <input
                className="shadow appearance-none border rounded w-80 py-2 px-3 mb-1
              text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="you@example.com"
                {...register(...regOptEnter.email())}
              />

              {errors.email?.message}
              <label
                className="block text-gray-700 text-sm font-bold mt-2 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-80 py-2 px-3 mb-1
              text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="************"
                {...register(...regOptEnter.password())}
              />

              {errors.password?.message}
            </div>
            <button
              className="bg-gray-800 hover:bg-black text-white font-bold w-80 py-2 px-2 mt-3
            rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              {isLoging ? "로그인" : "가입하기"}
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmitSignUp(onValidSignUp)}>
          <div className="flex flex-row justify-center gap-2 mt-2">
            <input
              type="button"
              value="로그인"
              onClick={handleClick}
              className="bg-slate-500 cursor-pointer hover:bg-slate-700 text-white font-extrabold w-40 py-2 px-3 mt-10
              rounded-t-lg text-xs"
            />
            <input
              type="button"
              value="회원가입"
              className="bg-blue-500 pointer-events-none text-slate-100 hover:text-white font-bold w-40 py-2 px-3 mt-10
              rounded-t-lg shadow-md text-xs"
            />
          </div>
          <div className="bg-gray-100 flex flex-col items-center border-2 border-blue-500 shadow-md shadow-gray-600 mx-auto w-[90%] py-4 rounded">
            <div className="h-80 flex flex-col justify-center gap-2">
              <label
                className="text-gray-700 text-sm font-bold flex flex-col mt-1 gap-0.5"
                htmlFor="username"
              >
                E_Mail
              </label>
              <input
                className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="you@example.com"
                {...registerSignUp(...regOptEnter.email())}
              />
              {errosSignUp.emailSignUp?.message}
              <label
                className="block text-gray-700 text-sm font-bold mt-1 gap-0.5"
                htmlFor="username"
              >
                닉네임
              </label>
              <input
                className="shadow appearance-none border rounded w-80 py-2 px-3 mb-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="ex.홍길동"
                {...registerSignUp(...regOptEnter.nickname())}
              />
              {errosSignUp.nickname?.message}
              <label
                className="block text-gray-700 text-sm font-bold mt-1 gap-0.5"
                htmlFor="username"
              >
                비밀번호
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-80 py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="************"
                {...registerSignUp(...regOptEnter.password())}
              />
              {errosSignUp.passwordSignUp?.message}
              <label
                className="block text-gray-700 text-sm font-bold mt-1 gap-0.5"
                htmlFor="username"
              >
                비밀번호 확인
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-80 py-2 px-3 text-gray-700 mb-5 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="************"
                {...registerSignUp(
                  ...regOptEnter.confirm({
                    validate: {
                      check: (confirm) =>
                        password === confirm || "비밀번호가 일치하지 않습니다",
                    },
                  })
                )}
              />
              {errosSignUp.confirm?.message}
            </div>
            <button
              onClick={handleSubmitSignUp}
              className="bg-gray-700 hover:bg-black text-white font-bold w-80 py-2 px-2 
            rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              가입하기
            </button>
          </div>
        </form>
      )}
      <div className="bg-gray-100 flex flex-col text-gray-700 text-sm font-bold items-center border-2 border-blue-500 shadow-md shadow-gray-600 mx-auto w-[90%] py-4 rounded">
        *소셜계정으로 간편 로그인*
        <div className="w-3/4 mt-4 mx-auto flex justify-around">
          <Kakao onClick={handleClickKakao} />
          <Google />
        </div>
      </div>
    </>
  );
};

export default Enter;
// async () => {
//             const res = await axios(apiBaseUrl + "kakao");
//             console.log(res);
//           }
