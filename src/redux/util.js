export const setGroups = (state) => ({ data: state, selected: null });
export const setStatus = (state, status) => ({ ...state, status });
export const getToken = () => {
  return {
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
  };
};
