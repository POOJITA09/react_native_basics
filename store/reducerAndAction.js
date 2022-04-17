import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  pendingList: [],
  completedList: [],
};


// action.payload.id
export const todoListSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.pendingList.push(action.payload);
    },
    deleteItem:(state,action)=>{
      const updatedData=state.pendingList.filter((item)=>{
        return item.key!=action.payload
      })
      state.pendingList=updatedData
    },

  },
});

export const { deleteItem, addItem } = todoListSlice.actions;


export const addItemAsync = (data) => {
  return async (dispatch, getState) => {
    // const response= await axios.post('url',data,header)
    dispatch(addItem(data));
  };
};

export const deleteItemAsync = (deleteData) => {
  return async (dispatch, getState) => {
    // const response= await axios.post('url',data,header)
    dispatch(deleteItem(deleteData));
  };
};

export default todoListSlice.reducer;
