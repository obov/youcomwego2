import { useState } from "react";
import { useForm } from "react-hook-form";
import { regOptEnter } from "../utils/validate";
import { useDispatch } from "react-redux";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Enter = () => {
  const { postLogin, isAuth, postSignup } = useAuth();
  const dispatch = useDispatch();
  const [isLoging, setIsLoging] = useState(true);
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
          <div className="flex flex-row justify-center">
            <button
              onClick={handleClickLogin}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-40 py-2 px-3 mt-10
            rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              로그인
            </button>
            <button
              onClick={handleClickSiginup}
              className="bg-blue-500 hover:bg-green-700 text-white font-bold rounded w-40 py-2 px-3 mt-10
            rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              회원가입
            </button>
          </div>
          <div className="flex flex-col items-center">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              E_Mail
            </label>
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 
              text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="you@example.com"
              {...register(...regOptEnter.email())}
            />
            {errors.email?.message}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-80 py-2 px-3 
              text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="************"
              {...register(...regOptEnter.password())}
            />
            {errors.password?.message}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-80 py-2 px-2 
            rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              {isLoging ? "로그인" : "가입하기"}
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmitSignUp(onValidSignUp)}>
          <div className="flex flex-row justify-center">
            <button
              onClick={handleClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-40 py-2 px-3 mt-10
            rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              로그인
            </button>
            <button
              onClick={handleSubmitSignUp}
              className="bg-blue-500 hover:bg-green-700 text-white font-bold rounded w-40 py-2 px-3 mt-10
            rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              회원가입
            </button>
          </div>
          <div className="flex flex-col items-center">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
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
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="username"
            >
              닉네임
            </label>
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="ex.홍길동"
              {...registerSignUp(...regOptEnter.nickname())}
            />
            {errosSignUp.nickname?.message}
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="username"
            >
              비밀번호
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="************"
              {...registerSignUp(...regOptEnter.password())}
            />
            {errosSignUp.passwordSignUp?.message}
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="username"
            >
              비밀번호 확인
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
            <button
              onClick={handleSubmitSignUp}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-80 py-2 px-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              가입하기
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Enter;
