import data from "../src/assets/data.json";
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  requests: data.productRequests,
};

const requestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    addRequest: (state, action) => {
      state.requests.push({ id: state.requests[-1].id+1, title: action.payload.title,category:action.payload.category,upvotes: 0,status: "suggestion",description:action.payload.description });
    },
    editRequest: (state,action) => {
        state.requests = [...state.requests,{...action.payload}]
    },
    deleteRequest: (state, action) => {
      state.requests = state.requests.filter((request) => request.id !== action.payload);
    },
  },
});

export const { addRequest,editRequest, deleteRequest } = requestSlice.actions;

export default requestSlice.reducer;
