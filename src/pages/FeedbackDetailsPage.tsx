import {
  FeedbackDetail,
  FeedbackTop,
  CommentsSection,
  Comment,
  Reply,
  AddComment,
} from "./page_styles";
import { useLocation } from "react-router-dom";
import SuggestionCard from "../components/SuggestionCard";
import { Btn, BackBtn } from "../components/Button";

const FeedbackDetailsPage = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <FeedbackDetail>
      <FeedbackTop>
        <BackBtn />
        <Btn color="lightBlue">Edit Feedback</Btn>
      </FeedbackTop>
      <SuggestionCard {...state} />
      <CommentsSection>
        <h1>{state.comments.length} Comments</h1>
        {state.comments?.map((comment) => (
          <CommentComponent {...comment} />
        ))}
      </CommentsSection>
      <AddCommentComponent />
    </FeedbackDetail>
  );
};

const CommentComponent = ({ ...comment }) => {
  return (
      <Comment>
        <div className="main">
          <img src={comment.user.image} alt="" />
          <div className="">
            <h3>{comment.user.name}</h3>
            <span>@{comment.user.username}</span>
          </div>

            <div className=""></div>
            <p>{comment.content}</p>
            </div>
          {comment.replies?.map((reply) => (
            <Reply>
              <div className="main">

                <img src={reply.user.image} alt="" />
                <div className="">
                  <h3>{reply.user.name}</h3>
                  <span>@{reply.user.username}</span>
                </div>

                <div className=""></div>
                <p>
                  <b>@{reply.replyingTo}</b> {' '}
                  {reply.content}
                </p>
              </div>
            </Reply>
          ))}
          
      </Comment>
  );
};

const AddCommentComponent = () => {
  return (<AddComment>
<h1>Add Comment</h1>
<textarea rows={5}>
  Can't wait for dark mode
</textarea>
<div className="flex">
  255 characters left
  <Btn color="purple">Post Comment</Btn>
</div>
</AddComment>
  )
};
export default FeedbackDetailsPage;
