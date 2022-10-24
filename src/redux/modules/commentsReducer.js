import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setStatus } from "../util";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const initialComents = [
  {
    commentId: 1,
    meetingId: 1,
    userId: 1,
    nickname: "test",
    content: "댓글입니다",
  },
  {
    commentId: 2,
    meetingId: 1,
    userId: 1,
    nickname: "test",
    content: "댓글입니다",
  },
  {
    commentId: 3,
    meetingId: 1,
    userId: 1,
    nickname: "test",
    content: "댓글입니다",
  },
];

export const getComments = createAsyncThunk(
  "meetingsReducer/getComments",
  async () => {
    // const data = await (await fetch(apiBaseUrl + "meetings")).json();
    // return data;
    return initialComents;
  }
);

// export const postNewTodo = createAsyncThunk(
//   "meetingsReducer/postNewTodo",
//   async (payload) => {
//     const data = await (
//       await fetch(apiBaseUrl + "todos", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       })
//     ).json();
//     return data;
//   }
// );

// export const deleteTodo = createAsyncThunk(
//   "meetingsReducer/deleteTodo",
//   async (payload) => {
//     const data = await (
//       await fetch(apiBaseUrl + "todos/" + payload.id, {
//         method: "DELETE",
//       })
//     ).json();
//     return payload;
//   }
// );
// export const patchTodo = createAsyncThunk(
//   "meetingsReducer/patchTodo",
//   async (payload) => {
//     const data = await (
//       await fetch(apiBaseUrl + "todos/" + payload.id, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       })
//     ).json();
//     return payload;
//   }
// );
const comments = createSlice({
  name: "commentsReducer",
  initialState: setStatus([], "init"),
  // reducers: {
  //   add: (state, action) => {
  //     const newTodo = {
  //       id: Date.now(),
  //       ...action.payload,
  //     };
  //     state.data.push(newTodo);
  //     state[action.payload.phase].push(newTodo);
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(getComments.pending, (state, action) => {
      return setStatus(state, "loading");
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      return setStatus({ data: action.payload }, "fulfilled");
    });

    // builder.addCase(postNewTodo.rejected, (state, action) => {
    //   state.data = state.data.filter((todo) => todo.id !== action.payload.id);
    //   state[action.payload.phase] = state[action.payload.phase].filter(
    //     (todo) => todo.id !== action.payload.id
    //   );
    // });

    // builder.addCase(deleteTodo.fulfilled, (state, action) => {
    //   state.data = state.data.filter((todo) => todo.id !== action.payload.id);
    //   state[action.payload.phase] = state[action.payload.phase].filter(
    //     (todo) => todo.id !== action.payload.id
    //   );
    // });
    // builder.addCase(deleteTodo.rejected, (state, action) => {
    //   state.data.push(action.payload);
    //   state[action.payload.phase].push(action.payload);
    // });

    // builder.addCase(patchTodo.fulfilled, (state, action) => {
    //   const index = state.data.findIndex((e) => e.id === action.payload.id);
    //   const newTodo = { ...state.data[index], ...action.payload };
    //   if (action.payload.phase) {
    //     const beforePhase = state.data[index].phase;
    //     state[beforePhase] = state[beforePhase].filter(
    //       (todo) => todo.id !== action.payload.id
    //     );
    //     state[action.payload.phase].push(newTodo);
    //   } else {
    //     state[state.data[index].phase] = state[state.data[index].phase].map(
    //       (todo) => (todo.id === action.payload.id ? newTodo : todo)
    //     );
    //   }
    //   state.data[index] = newTodo;
    // });
  },
});

// export const { add } = meeting.actions;
export default comments;
