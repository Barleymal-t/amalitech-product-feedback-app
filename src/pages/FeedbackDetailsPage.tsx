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
import { Btn, BackBtn } from "../components/Button";
import { Button } from "../components/components_styles";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

type Params = {
  requestId: string;
};

const FeedbackDetailsPage = () => {
  const params = useParams<Params>();
  console.log(params);
  const navigate = useNavigate();
  const productRequests = useSelector(
    (state: RootState) => state.request.requests
  );
  const dispatch = useDispatch();

  const request = productRequests.find(
    (request) => request.id == parseInt(params.requestId ?? "0")
  );
  {
    if (request) {
      return (
        <FeedbackDetail>
          <FeedbackTop>
            <BackBtn />
            <Button color="lightBlue">Edit Feedback</Button>
          </FeedbackTop>
          <SuggestionCard {...request} />
          <CommentsSection>
            <h1>{request.comments?.length} Comments</h1>
            {request.comments?.map((comment: any) => (
              <CommentComponent {...comment} />
            ))}
          </CommentsSection>
          <AddCommentComponent />
        </FeedbackDetail>
      );
    } else {
      return <h1>No request found</h1>;
    }
  }
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
      {comment.replies?.map((reply: any) => (
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
  // const {request} = useLocation()

  // Create function to add new comment
  // const addComment = (comment)=> {
  //   request.comments.push(comment)
  // }

  return (
    <AddComment>
      <h1>Add Comment</h1>
      <textarea placeholder="Type your comment here"/>
      <div className="flex">
        255 characters left
        <Button
          color="purple"
          // onClick={addComment}
        >
          Post Comment
        </Button>
      </div>
    </AddComment>
  );
};
export default FeedbackDetailsPage;
