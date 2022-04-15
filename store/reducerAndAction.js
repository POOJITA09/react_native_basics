import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  pendingList: [],
  completedList: [],
};

export const addItemAsync = (data) => {
  return async (dispatch, getState) => {
    // const response= await axios.post('url',data,header)
    dispatch(addItem(data));
  };
};

// action.payload.id
export const todoListSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.pendingList.push(action.payload);
    },
  },
});

export const { deleteItem, addItem } = todoListSlice;

export default todoListSlice.reducer;
