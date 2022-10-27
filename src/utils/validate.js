const optionCreator =
  (option) =>
  (customOpts = {}) => {
    const [name, opts] = option;
    return [name, { ...opts, ...customOpts }];
  };

export const regOptEnter = {
  email: optionCreator([
    "email",
    {
      required: "이메일을 입력해주세요",
    },
  ]),
  password: optionCreator([
    "password",
    {
      required: "비밀번호를 입력해주세요",
      minLength: {
        value: 4,
        message: "비밀번호는 최소 4자 이상 입력해 주세요",
      },
    },
  ]),
  nickname: optionCreator([
    "nickname",
    {
      required: "닉네임을 입력해주세요",
      minLength: {
        value: 3,
        message: "닉네임은 최소 3자 이상 입력해 주세요",
      },
    },
  ]),
  confirm: optionCreator([
    "confirm",
    {
      required: "중복확인이 필요합니다",
    },
  ]),
};
export const regOptMeeting = {
  title: optionCreator([
    "title",
    {
      required: "모임명을 입력해주세요",
    },
  ]),
  password: optionCreator([
    "password",
    { required: "비밀번호를 입력해주세요" },
  ]),
  nickname: optionCreator([
    "nickname",
    {
      required: "닉네임을 입력해주세요",
    },
  ]),
  confirm: optionCreator([
    "confirm",
    {
      required: "중복확인이 필요합니다",
    },
  ]),
};
