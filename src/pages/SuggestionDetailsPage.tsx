import {
  FeedbackDetail,
  FeedbackTop,
  CommentsSection,
  Comment,
  Reply,
  AddComment,
} from "./page_styles";
import { useNavigate, useParams } from "react-router-dom";
import SuggestionCard from "../components/SuggestionCard";
import { BackBtn } from "../components/Button";
import { Button } from "../components/components_styles";
import {  useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { comment, reply } from "../../store/suggestionsSlice";

export type Params = {
  id: string;
};

const FeedbackDetailsPage = () => {
  const params = useParams<Params>();
  console.log(params);
  const navigate = useNavigate();
  const productRequests = useSelector(
    (state: RootState) => state.request
  );

  const suggestion = productRequests.find(
    (suggestion) => suggestion.id === parseInt(params.id ?? "0")
  );
  console.log(suggestion,productRequests)
  
    
      return (
        <FeedbackDetail>
          <FeedbackTop>
            <BackBtn />
            <Button color="lightBlue" onClick={()=>navigate(`feedback/${params.id}/edit`)}>Edit Feedback</Button>
          </FeedbackTop>
          <SuggestionCard {...suggestion} />
          <CommentsSection>
            <h1>{suggestion?.comments?.length} Comments</h1>
            {suggestion?.comments?.map((comment: comment) => (
              <CommentComponent {...comment} />
            ))}
          </CommentsSection>
          <AddCommentComponent />
        </FeedbackDetail>
      );
    // } else {
    //   return <h1>No request found</h1>;
    // }
  // }
};

const CommentComponent = ({ ...comment }) => {
  return (
    <Comment>
      <div className="main">
        <img src={`.${comment.user.image}`} alt="" />
        <div className="greyline"> </div>
        <FeedbackTop>
          <div className="">
            <h3>{comment.user.name}</h3>
            <span>@{comment.user.username}</span>
          </div>
          <b>Reply</b>
        </FeedbackTop>

        <div className=""></div>
        <p>{comment.content}</p>
      </div>
      {comment.replies?.map((reply: reply) => (
        <Reply>
          <div className="main">
            <img src={`.${reply.user.image}`} alt="" />
            <FeedbackTop>
              <div className="">
                <h3>{reply.user.name}</h3>
                <span>@{reply.user.username}</span>
              </div>
              <b>Reply</b>
            </FeedbackTop>

            <div className=""></div>
            <p>
              <b>@{reply.replyingTo}</b> {reply.content}
            </p>
          </div>
        </Reply>
      ))}
    </Comment>
  );
};

const AddCommentComponent = () => {

  return (
    <AddComment>
      <h1>Add Comment</h1>
      <textarea placeholder="Type your comment here"/>
      <div className="flex">
        255 characters left
        <Button
          color="purple"
        >
          Post Comment
        </Button>
      </div>
    </AddComment>
  );
};
export default FeedbackDetailsPage;
