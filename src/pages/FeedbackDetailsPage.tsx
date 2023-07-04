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
import {H1, H2,H3, Button } from "../components/components_styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { comment, reply } from "../../store/suggestionsSlice";

type Params = {
  id: string;
};

const FeedbackDetailsPage = () => {
  const params = useParams<Params>();
  
  const navigate = useNavigate();
  const request = useSelector(
    (state: RootState) => state.request.find(
      (request) => request.id === Number(params.id)
    )
  )
  // const dispatch = useDispatch();

      return (
        <FeedbackDetail>
          <FeedbackTop>
            <BackBtn />
            <Button color="lightBlue" onClick={()=>navigate("edit")}>Edit Feedback</Button>
          </FeedbackTop>
          <SuggestionCard {...request} />
          <CommentsSection>
            <H1>{request?.comments?.length} Comments</H1>
            {request?.comments?.map((comment: comment) => (
              <CommentComponent {...comment} />
            ))}
          </CommentsSection>
          <AddCommentComponent />
        </FeedbackDetail>
      );
  //   } else {
  //     return <H1>No request found</H1>;
  //   }
  // }
};

const CommentComponent = ({ ...comment }:comment) => {
  return (
    <Comment>
      <div className="main">
        <img src={`.${comment.user.image}`} alt="" />
        <div className="greyline"> </div>
        <FeedbackTop>
          <div className="">
            <H3>{comment.user.name}</H3>
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
                <H3>{reply.user.name}</H3>
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
      <H1>Add Comment</H1>
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
