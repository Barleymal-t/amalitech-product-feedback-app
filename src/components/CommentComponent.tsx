import { useState } from "react";
import { CommentStyles, Greyline, SuggestionTop } from "../pages/page_styles";
import { Comment,Reply } from "../store/suggestionsSlice";
import { H4 } from "./components_styles";
import ReplyComponent from "./ReplyComponent";
import ReplyForm from "./ReplyForm";
import { popUp } from "../pages/SuggestionsPage";

const CommentComponent = (props: { sugId: number; comment: Comment }) => {
    const { sugId, comment } = props;
    const [newReply, setNewReply] = useState(false);
  
    return (
      <CommentStyles
      variants={popUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
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

  export default CommentComponent