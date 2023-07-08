import data from "../src/assets/data.json";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { original } from 'immer'
import { category } from "../src/pages/NewSuggestionPage";
import { status } from "../src/pages/EditSuggestionPage";
    
  
export type reply ={
  content: string;
  replyingTo: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
}
export type comment = {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
  replies?: reply[];
};
export type request = {
  id: number;
  title: string;
  category: category;
  upvotes: number;
  status: status;
  description: string;
  upvoted: boolean;
  comments?: comment[];
};

export type requestsType = request[];

const initialState: requestsType = data.productRequests.map((request):request => {
  return { ...request, upvoted: false } as request;
});

const suggestionSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {
    suggestionAdded: {
      reducer: (state: requestsType, action: PayloadAction<request>) => {
        state.push(action.payload);
      },
      prepare(
        title: string,
        category: category,
        description: string,
        
      ) {
        return {
          payload: {
            id: +nanoid(),
            title,
            category,
            upvotes: 0,
            status: "suggestion",
            description,
            upvoted: false,
            comments: [],
          } as request,
        };
      },
    },
    suggestionEdited: (state, action) => {
      const { id, title, category, status, description } =
        action.payload;
      const suggestion = state.find(
        (suggestion) => suggestion.id === +id
      );
      if (suggestion) {
        suggestion.title = title;
        suggestion.category = category;
        suggestion.status = status;
        suggestion.description = description;
      }
    },
    suggestionDeleted: (state, action) => {
      const suggestionIndex = state.findIndex( suggestion => suggestion.id === +action.payload
      );
      state.splice(suggestionIndex, 1);
    },
    suggestionUpvoted(state, action) {
      const suggestion = state.find((el) => el.id === action.payload);
      if (suggestion && !suggestion.upvoted) {
        suggestion.upvotes++;
        suggestion.upvoted = true;
      }
    },
    suggestionUnUpvoted(state, action) {
      const suggestion = state.find((el) => el.id === action.payload);
      if (suggestion && suggestion.upvoted) {
        suggestion.upvotes--;
        suggestion.upvoted = false;
      }
    },
  },
});

export const {
  suggestionAdded,
  suggestionEdited,
  suggestionDeleted,
  suggestionUpvoted,
  suggestionUnUpvoted,
} = suggestionSlice.actions;

export default suggestionSlice.reducer;
