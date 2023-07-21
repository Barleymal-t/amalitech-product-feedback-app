import data from "/assets/data.json";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { category } from "../pages/NewSuggestionPage";
import { status } from "../pages/EditSuggestionPage";

const currentUser: User = {
  image: "./assets/user-images/image-victoria.jpg",
  name: "Victoria Mejia",
  username: "arlen_the_marlin",
};

export type User = {
  image: string;
  name: string;
  username: string;
};

export type Base = {
  content: string;
  user: User;
} & {
  type: Comment;
  id: number;
  replies?: Reply[];
} & {
  type: Reply;
  replyingTo: string;
};

export type Reply = {
  content: string;
  replyingTo: string;
  user: User;
};
export type Comment = {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
};
export type Request = {
  id: number;
  title: string;
  category: category;
  upvotes: number;
  status: status;
  description: string;
  upvoted: boolean;
  comments?: Comment[];
};

export type requestsType = Request[];

const initialState: requestsType = data.productRequests.map(
  (request): Request => {
    return { ...request, upvoted: false } as Request;
  }
);

const suggestionSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {
    suggestionAdded: (
      state: requestsType,
      action: PayloadAction<{
        title: string;
        category: category;
        description: string;
      }>
    ) => {
        const sugId = current(state).length+1
      state.push({
        id:sugId,
        ...action.payload,
        upvotes: 0,
        status: "suggestion",
        upvoted: false,
        comments: [],
      });
    },
    suggestionEdited: (
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        category: category;
        status: status;
        description: string;
      }>
    ) => {
      const { id, title, category, status, description } = action.payload;
      const suggestion = state.find((suggestion) => suggestion.id === id);
      if (suggestion) {
        suggestion.title = title;
        suggestion.category = category;
        suggestion.status = status;
        suggestion.description = description;
      }
    },
    suggestionDeleted: (state, action) => {
      const suggestionIndex = state.findIndex(
        (suggestion) => suggestion.id === +action.payload
      );
      state.splice(suggestionIndex, 1);
    },
    suggestionUpvoted(state, action) {
      const suggestion = state.find((suggestion) => suggestion.id === action.payload);
      if (suggestion && !suggestion.upvoted) {
        suggestion.upvotes++;
        suggestion.upvoted = true;
      }
    },
    suggestionUnUpvoted(state, action) {
      const suggestion = state.find((suggestion) => suggestion.id === action.payload);
      if (suggestion && suggestion.upvoted) {
        suggestion.upvotes--;
        suggestion.upvoted = false;
      }
    },
    commentAdded(state: requestsType, action:PayloadAction<{sugId:number,content:string,}>) {
      const lastCommentId:number[] = current(state)
        .map((suggestion) => suggestion.comments)
        .flat()
        .filter((item) => typeof item !== "undefined")
        .map((comment) => comment?.id ?comment.id:1);
      const commentId = Math.max(...lastCommentId) + 1;

      const suggestion = state.find(
        (suggestion) => suggestion.id === +action.payload.sugId
      );
      const comment: Comment = {
        id: commentId,
        content: action.payload.content,
        user: currentUser,
      };
      if (suggestion?.comments) {
        suggestion.comments.push(comment);
      }else if(suggestion) {
        suggestion.comments = [comment]
      }
    },
    replyAdded(
      state: requestsType,
      action: PayloadAction<{
        comId: number;
        sugId: number;
        content: string;
        replyingTo: string;
      }>
    ) {
      const { comId, sugId, content, replyingTo } = action.payload;
      const suggestion = state.find((suggestion) => suggestion.id === sugId);
      const reply: Reply = {
        content: content,
        replyingTo: replyingTo,
        user: currentUser,
      };

      if (suggestion?.comments) {
        let targetComment;
        if (comId) {
          targetComment = suggestion.comments.find(
            (comment) => comment.id === comId
          );
        } else {
          targetComment = suggestion.comments.find(
            (comment) => comment.user.username === replyingTo
          );
        }
        if (targetComment) {
          if (targetComment.replies) {
            targetComment.replies.push(reply);
          } else {
            targetComment.replies = [reply];
          }
        }
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
  commentAdded,
  replyAdded,
} = suggestionSlice.actions;

export default suggestionSlice.reducer;
