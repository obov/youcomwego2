<<<<<<< HEAD
import { useState } from "react";
import { useForm } from "react-hook-form";

const Enter = () => {
=======
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { regOptEnter } from "../utils/validate";

const Enter = () => {
  const navigate = useNavigate();
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
  const [isLoging, setIsLoging] = useState(true);
  const handleClick = () => {
    setIsLoging(!isLoging);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
<<<<<<< HEAD
  } = useForm();
  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: errosSignUp },
  } = useForm();
  const onValid = console.log;
  const onValidSignUp = console.log;
  return (
    <>
=======
    reset,
  } = useForm();
  const {
    register: regSignup,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: errosSignUp },
    watch,
    reset: resetSignUp,
  } = useForm();
  const onValid = async ({ email, password }) => {
    reset();
    const data = await new Promise((res) => {
      setTimeout(() => {
        if (email === "qqq" && password === "111") {
          localStorage.setItem("login", "true");
          navigate("/");
          res({ ok: true });
        } else {
          res({ ok: false });
        }
      }, 1000);
    });
    console.log(data);
  };
  const onValidSignUp = console.log;
  useEffect(() => {
    resetSignUp();
    reset();
  }, [isLoging, reset, resetSignUp]);
  const password = watch("password");

  return (
    <>
      <button onClick={handleClick}>{isLoging ? "회원가입" : "로그인"}</button>
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
      {isLoging ? (
        <form onSubmit={handleSubmit(onValid)}>
          <div className="flex flex-col">
            로그인
<<<<<<< HEAD
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                E_Mail
            </label>
            <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="you@example.com"
              {...register("email", { required: "이메일을 입력해주세요" })}
            />
            {errors.email?.message}
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="************"
              {...register("password", { required: "비밀번호를 입력해주세요" })}
            />
            {errors.password?.message}
          </div>
            {/* <button onClick={handleClick} class="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="button"> */}
            <button onClick={handleClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-60 py-2 px-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                로그인
            </button>
            <button onClick={handleClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-20 py-2 px-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            {/* class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#"> */}
            {isLoging ? "회원가입" : "로그인"}
            </button>
=======
            <input {...register(...regOptEnter.email())} />
            {errors.email?.message}
            <input {...register(...regOptEnter.password())} />
            {errors.password?.message}
          </div>
          <button>submit</button>
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
        </form>
      ) : (
        <form onSubmit={handleSubmitSignUp(onValidSignUp)}>
          <div className="flex flex-col">
            회원가입
<<<<<<< HEAD
            <label class="block text-gray-700 text-sm font-bold mb-1" for="username">
                E_Mail
            </label>
            <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="you@example.com"
              {...registerSignUp("emailSignUp", {
                required: "이메일을 입력해주세요",
              })}
            />
            {errosSignUp.emailSignUp?.message}
            <label class="block text-gray-700 text-sm font-bold mb-1" for="username">
                닉네임
            </label>
            <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ex.홍길동"
              {...registerSignUp("nicknameSignUp", {
                required: "닉네임을 입력해주세요",
              })}
            />
            {errosSignUp.nickname?.message}
            <label class="block text-gray-700 text-sm font-bold mb-1" for="username">
                비밀번호
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="************"
              {...registerSignUp("passwordSignUp", {
                required: "비밀번호를 입력해주세요",
              })}
            />
            {errosSignUp.passwordSignUp?.message}
            <label class="block text-gray-700 text-sm font-bold mb-1" for="username">
                비밀번호 확인
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="************"
              {...registerSignUp("confirm", {
                required: "중복확인이 필요합니다",
              })}
            />
            {errosSignUp.confirm?.message}
          </div>
          <button onClick={handleClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-80 py-2 px-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            가입하기
          </button>
=======
            <input type="email" {...regSignup(...regOptEnter.email())} />
            {errosSignUp.email?.message}
            <input type="text" {...regSignup(...regOptEnter.nickname())} />
            {errosSignUp.nickname?.message}
            <input type="password" {...regSignup(...regOptEnter.password())} />
            {errosSignUp.password?.message}
            <input
              type="password"
              {...regSignup(
                ...regOptEnter.confirm({
                  validate: {
                    check: (confirm) =>
                      confirm === password ||
                      "password and confirm are different",
                  },
                })
              )}
            />
            {errosSignUp.confirm?.message}
          </div>
          <button>submit</button>
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
        </form>
      )}
    </>
  );
};

<<<<<<< HEAD
export default Enter;
=======
export default Enter;
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
