import {
  SuggestionDetail,
  SuggestionTop,
  CommentsSection,
  CommentStyles,
  ReplyStyles,
  AddComment,
  Greyline,
} from "./page_styles";
import { useNavigate, useParams } from "react-router-dom";
import SuggestionCard from "../components/SuggestionCard";
import { BackBtn } from "../components/Button";
import {
  H1,
  H2,
  H3,
  H4,
  Button,
  TextArea,
} from "../components/components_styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  commentAdded,
  replyAdded,
  Comment,
  Reply,
} from "../../store/suggestionsSlice";
import { useForm } from "react-hook-form";
import { useState } from "react";

export type Params = {
  id: string;
};

const SuggestionDetailsPage = () => {
  const params = useParams<Params>();

  const navigate = useNavigate();
  const request = useSelector((state: RootState) =>
    state.request.find((request) => request.id === Number(params.id))
  );
  const dispatch = useDispatch();
  if (request) {
    return (
      <SuggestionDetail>
        <SuggestionTop>
          <BackBtn />
          <Button color="lightBlue" onClick={() => navigate("edit")}>
            Edit Suggestion
          </Button>
        </SuggestionTop>
        <SuggestionCard {...request} />
        <CommentsSection>
          <H1>{request.comments?.length} Comments</H1>
          {request.comments?.map((comment: Comment, index: number) => (
            <CommentComponent
              key={index}
              sugId={request.id}
              comment={comment}
            />
          ))}
        </CommentsSection>
        <AddCommentComponent sugId={request.id} />
      </SuggestionDetail>
    );
  } else {
    return <H1>No request found</H1>;
  }
};

const CommentComponent = (props: { sugId: number; comment: Comment }) => {
  const dispatch = useDispatch();
  const { sugId, comment } = props;
  const [content, setContent] = useState("");
  const [newReply, setNewReply] = useState(false);
  // const submitReply = ()=> {
  //   dispatch(replyAdded({sugId,comment.user.username,content}))
  //   setContent('')
  // }

  return (
    <CommentStyles>
      <div className="main">
        <img src={`.${comment.user.image}`} alt="" />
        {comment.replies && <Greyline />}
        <SuggestionTop>
          <div className="">
            <H4>{comment.user.name}</H4>
            <span>@{comment.user.username}</span>
          </div>
          <b onClick={() => setNewReply(!newReply)}>Reply</b>
        </SuggestionTop>

        <div className="shift"></div>
        <p className="comment-content"> {comment.content}</p>
        <div className="shift"></div>
        {newReply && <ReplyForm setNewReply={setNewReply} replyingTo={comment.user.username} sugId={sugId} />}
      </div>
      {comment.replies?.map((reply: Reply, index: number) => (
        <ReplyComponent key={index} comId={comment.id} reply={reply}  sugId={sugId} />
      ))}
    </CommentStyles>
  );
};

const ReplyForm = ({ replyingTo,sugId,comId,setNewReply }: { replyingTo: string,sugId:number,comId?:number, setNewReply:any }) => {
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  const submitReply = () => {
    dispatch(replyAdded({sugId,comId,replyingTo,content}))
    setContent("");
    setNewReply(false)
  };
  return (
    <form onSubmit={() => replyAdded} className="flex">
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        maxLength={250}
        placeholder={`Type your reply to @${replyingTo}'s comment`}
      />
      <Button color="purple" type="button" onClick={submitReply}>
        Post Reply
      </Button>
    </form>
  );
};

const ReplyComponent = ({ comId, reply,sugId }: { comId:number, reply: Reply,sugId:number }) => {
  const [newReply, setNewReply] = useState(false);

  return (
    <ReplyStyles>
      <div className="main">
        <img src={`.${reply.user.image}`} alt="" />
        <SuggestionTop>
          <div className="">
            <H4>{reply.user.name}</H4>
            <span>@{reply.user.username}</span>
          </div>
          <b onClick={() => setNewReply(!newReply)}>Reply</b>
        </SuggestionTop>

        <div className=""></div>
        <p className="comment-content">
          <b>@{reply.replyingTo}</b> {reply.content}
        </p>
        <div className="shift"></div>
        {newReply && <ReplyForm replyingTo={reply.user.username} comId={comId} sugId={sugId}  setNewReply={setNewReply} />}
      </div>
    </ReplyStyles>
  );
};

const AddCommentComponent = ({ sugId }: { sugId: number }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value);
  // };

  const [content, setContent] = useState("");
  const left = 255 - content.length;
  const submitComment = () => {
    dispatch(commentAdded({ sugId, content }));
    setContent("");
  };

  return (
    <AddComment>
      <H1>Add Comment</H1>
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        maxLength={250}
        placeholder="Type your comment here"
      />
      <div className="flex">
        {left.toString()} characters left
        <Button color="purple" type="button" onClick={submitComment}>
          Post Comment
        </Button>
      </div>
      {/* <pre>{JSON.stringify(watch(),null,2)}</pre> */}
    </AddComment>
  );
};
export default SuggestionDetailsPage;
