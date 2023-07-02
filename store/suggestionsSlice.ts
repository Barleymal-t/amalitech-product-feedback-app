import data from "../src/assets/data.json";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { original } from 'immer'
    
  
type comment = {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
  replies?: {
    content: string;
    replyingTo: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
  }[];
};
export type request = {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  upvoted: boolean;
  comments?: comment[];
};

export type requestsType = request[];

const initialState: requestsType = data.productRequests.map((request) => {
  return { ...request, upvoted: false };
});

const requestSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {
    suggestionAdded: {
      reducer: (state: requestsType, action: PayloadAction<request>) => {
        state.push(action.payload);
      },
      prepare(
        title: string,
        category: string,
        status: string,
        description: string
      ) {
        return {
          payload: {
            id: +nanoid(),
            title,
            category,
            upvotes: 0,
            status: status || "suggestion",
            description,
            upvoted: false,
            comments: [],
          },
        };
      },
    },
    suggestionEdited: (state, action) => {
      const { suggestionId, title, category, status, description } =
        action.payload;
      const suggestion = state.find(
        (suggestion) => suggestion.id === +suggestionId
      );
      if (suggestion) {
        suggestion.title = title;
        suggestion.category = category;
        suggestion.status = status;
        suggestion.description = description;
      }
    },
    suggestionDeleted: (state, action) => {
      const suggestionIndex = state.findIndex(
        (suggestion) => (suggestion.id = +action.payload)
      );
      state.splice(suggestionIndex, 1);
    },
    suggestionUpvoted(state, action) {
      const suggestion = state.find((el) => el.id === action.payload);
      if (suggestion && !suggestion.upvoted) {
        suggestion.upvotes++;
        suggestion.upvoted = true;
      }
      console.log(original(state))
    },
    suggestionUnUpvoted(state, action) {
      const suggestion = state.find((el) => el.id === action.payload);
      if (suggestion && suggestion.upvoted) {
        suggestion.upvotes--;
        suggestion.upvoted = false;
      }
      console.log(original(state))
    },
  },
});

export const {
  suggestionAdded,
  suggestionEdited,
  suggestionDeleted,
  suggestionUpvoted,
  suggestionUnUpvoted,
} = requestSlice.actions;

export default requestSlice.reducer;
