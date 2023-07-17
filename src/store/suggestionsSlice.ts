import data from "../assets/data.json";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
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
    suggestionAdded: (state: requestsType, action: PayloadAction<{id:number,title:string,category:category,description:string}>) => {
      
        state.push({...action.payload,upvotes:0,status:"suggestion",upvoted:false,comments:[]});
      console.log(state)
      // prepare(title: string, category: category, description: string) {
      //   return {
      //     payload: {
      //       id: +nanoid(),
      //       title,
      //       category,
      //       upvotes: 0,
      //       status: "suggestion",
      //       description,
      //       upvoted: false,
      //       comments: [],
      //     } as Request,
      //   };
      // },
    },
    suggestionEdited: (state, action) => {
      const { id, title, category, status, description } = action.payload;
      const suggestion = state.find((suggestion) => suggestion.id === +id);
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
    commentAdded(state: requestsType, action) {
      const suggestion = state.find(
        (suggestion) => suggestion.id === +action.payload.sugId
      );
      const comment: Comment = {
        id: +nanoid(),
        content: action.payload.content,
        user: currentUser,
      };
      suggestion?.comments?.push(comment);
    },
    replyAdded(state: requestsType, action) {
      const { comId, sugId, content, replyingTo } = action.payload;
      const suggestion = state.find((suggestion) => suggestion.id === +sugId);
      const reply: Reply = {
        content: content,
        replyingTo: replyingTo,
        user: currentUser,
      };

      // if(comId) {

      // }
      if (suggestion && suggestion.comments) {
        // find the user I am replying to
        const targetComment = suggestion.comments.find(
          (comment) => comment.user.username === replyingTo
        );
        // If the comment has replies add mine otherwise create a new reply array
        if (targetComment && targetComment.replies) {
          targetComment.replies.push(reply);
        } else if (targetComment) {
          targetComment.replies = [reply];
        } else {
          // Find the comment id
          const targetComment = suggestion.comments.find(
            (comment) => comment.id === comId
          );
          // find the reply I am replyingTo
          const targetReply = targetComment?.replies?.find(
            (reply) => reply.user.username === replyingTo
          );
          if (targetReply && targetComment?.replies) {
            const index = targetComment.replies.indexOf(targetReply);
            targetComment?.replies?.splice(index + 1, 0, reply);
          }
        }
      }
      // Finish this reducer
      /**
       * Basically add the reply right after whatever it is replying
       */
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
