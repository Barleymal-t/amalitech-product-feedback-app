import data from "../src/assets/data.json";
import { createSlice } from "@reduxjs/toolkit";


export type requestsType = {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: {
      id: number;
      content: string;
      user: {
          image: string;
          name: string;
          username: string;
      }
      replies?: {
        content: string;
        replyingTo: string;
        user: {
          image: string;
          name: string;
          username: string;
      }
  }[]
}[]
}[]

const initialState :requestsType | undefined =data.productRequests;


const requestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    addRequest: (state, action) => {
      state.push({ id: state[-1].id+1, title: action.payload.title,category:action.payload.category,upvotes: 0,status: "suggestion",description:action.payload.description });
    },
    editRequest: (state,action) => {
        state = [...state,{...action.payload}]
    },
    deleteRequest: (state, action) => {
      state = state.filter((request) => request.id !== action.payload);
    },
  },
});

export const { addRequest,editRequest, deleteRequest } = requestSlice.actions;

export default requestSlice.reducer;
