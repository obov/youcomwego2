
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { regOptEnter } from "../utils/validate";

const Enter = () => {
  const navigate = useNavigate();
  const [isLoging, setIsLoging] = useState(true);
  const handleClick = () => {
    setIsLoging(!isLoging);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
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
      {isLoging ? (
        <form onSubmit={handleSubmit(onValid)}>
          <div className="flex flex-col">
            로그인

            <input {...register(...regOptEnter.email())} />
            {errors.email?.message}
            <input {...register(...regOptEnter.password())} />
            {errors.password?.message}
          </div>
          <button>submit</button>
        </form>
      ) : (
        <form onSubmit={handleSubmitSignUp(onValidSignUp)}>
          <div className="flex flex-col">
            회원가입

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
        </form>
      )}
    </>
  );
};

export default Enter;
