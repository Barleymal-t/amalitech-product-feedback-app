import {
  SuggestionDetail,
  SuggestionTop,
  CommentsSection,
  Comment,
  Reply,
  AddComment,
  Greyline,
} from "./page_styles";
import { useNavigate, useParams } from "react-router-dom";
import SuggestionCard from "../components/SuggestionCard";
import { BackBtn } from "../components/Button";
import {H1, H2,H3, H4, Button, Comments, TextArea } from "../components/components_styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { comment, reply } from "../../store/suggestionsSlice";
import { useForm } from "react-hook-form";

export type Params = {
  id: string;
};

const SuggestionDetailsPage = () => {
  const params = useParams<Params>();
  
  const navigate = useNavigate();
  const request = useSelector(
    (state: RootState) => state.request.find(
      (request) => request.id === Number(params.id)
    )
  )
  // const dispatch = useDispatch();

      return (
        <SuggestionDetail>
          <SuggestionTop>
            <BackBtn />
            <Button color="lightBlue" onClick={()=>navigate("edit")}>Edit Suggestion</Button>
          </SuggestionTop>
          <SuggestionCard {...request} />
          <CommentsSection>
            <H1>{request?.comments?.length} Comments</H1>
            {request?.comments?.map((comment: comment) => (
              <CommentComponent {...comment} />
            ))}
          </CommentsSection>
          <AddCommentComponent />
        </SuggestionDetail>
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
        {
          comment.replies &&
          <Greyline/>
        }
        <SuggestionTop>
          <div className="">
            <H4>{comment.user.name}</H4>
            <span>@{comment.user.username}</span>
          </div>
          <b>Reply</b>
        </SuggestionTop>

        <div className="shift"></div>
        <p className="comment-content">{comment.content}</p>
<div className=""></div>
          <div className="flex">
          <TextArea />
          <Button color="purple">Post Reply</Button>
          </div>
      </div>
      {comment.replies?.map((reply: reply) => (
        <Reply>
          <div className="main">
            <img src={`.${reply.user.image}`} alt="" />
            <SuggestionTop>
              <div className="">
                <H4>{reply.user.name}</H4>
                <span>@{reply.user.username}</span>
              </div>
              <b>Reply</b>
            </SuggestionTop>

            <div className=""></div>
            <p className="comment-content">
              <b>@{reply.replyingTo}</b> {reply.content}
            </p>
<div className=""></div>
          <div className="flex">
          <TextArea />
          <Button color="purple">Post Reply</Button>
          </div>
          </div>
        </Reply>
      ))}
    </Comment>
  );
};

const AddCommentComponent = () => {

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value);
  // };

  const {register,handleSubmit,watch,getValues} = useForm<{description:string}>({
    defaultValues: {
      description: ""
    }
  })
  
const value:string = getValues("description")
const left = 255 - value.length
  return (
    <AddComment>
      <H1>Add Comment</H1>
      <TextArea {...register("description")} placeholder="Type your comment here"/>
      <div className="flex">
        {left.toString()} characters left
        <Button
          color="purple"
        >
          Post Comment
        </Button>

      </div>
      {/* <pre>{JSON.stringify(watch(),null,2)}</pre> */}
    </AddComment>
  );
};
export default SuggestionDetailsPage;
