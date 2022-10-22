import { useState } from "react";
import { useForm } from "react-hook-form";

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
    formState: { errors: errosSignUp },
  } = useForm();
  const onValid = console.log;
  const onValidSignUp = console.log;
  return (
    <>
      <button onClick={handleClick}>{isLoging ? "회원가입" : "로그인"}</button>

      {isLoging ? (
        <form onSubmit={handleSubmit(onValid)}>
          <div className="flex flex-col">
            로그인
            <input
              {...register("email", { required: "이메일을 입력해주세요" })}
            />
            {errors.email?.message}
            <input
              {...register("password", { required: "비밀번호를 입력해주세요" })}
            />
            {errors.password?.message}
          </div>
          <button>submit</button>
        </form>
      ) : (
        <form onSubmit={handleSubmitSignUp(onValidSignUp)}>
          <div className="flex flex-col">
            회원가입
            <input
              {...registerSignUp("emailSignUp", {
                required: "이메일을 입력해주세요",
              })}
            />
            {errosSignUp.emailSignUp?.message}
            <input
              {...registerSignUp("nicknameSignUp", {
                required: "닉네임을 입력해주세요",
              })}
            />
            {errosSignUp.nickname?.message}
            <input
              {...registerSignUp("passwordSignUp", {
                required: "비밀번호를 입력해주세요",
              })}
            />
            {errosSignUp.passwordSignUp?.message}
            <input
              {...registerSignUp("confirm", {
                required: "중복확인이 필요합니다",
              })}
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
