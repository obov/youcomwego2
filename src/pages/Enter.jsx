import { useState } from "react";
import { useForm } from "react-hook-form";
import { regOptEnter } from "../utils/validate";

const Enter = () => {
  const [isLoging, setIsLoging] = useState(true);
  const handleClick = () => {
    setIsLoging(!isLoging);
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
  const onValid = console.log;
  const onValidSignUp = console.log;
  return (
    <>
      {isLoging ? (
        <form onSubmit={handleSubmit(onValid)}>
          <div className="flex flex-col">
            로그인
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              E_Mail
            </label>
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border border-red-500 rounded w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="************"
              {...register(...regOptEnter.password())}
            />
            {errors.password?.message}
          </div>
          {/* <button onClick={handleClick} className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="button"> */}
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-60 py-2 px-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            로그인
          </button>
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-20 py-2 px-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            {/* className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#"> */}
            {isLoging ? "회원가입" : "로그인"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmitSignUp(onValidSignUp)}>
          <div className="flex flex-col">
            회원가입
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
          </div>
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-80 py-2 px-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            가입하기
          </button>
        </form>
      )}
    </>
  );
};

export default Enter;
