import { useState } from "react";
import { ReplyStyles, SuggestionTop } from "../pages/page_styles";
import { Reply } from "../store/suggestionsSlice";
import { H4 } from "./components_styles";
import ReplyForm from "./ReplyForm";
import { popUp } from "../pages/SuggestionsPage";

const ReplyComponent = ({ comId, reply,sugId }: { comId:number, reply: Reply,sugId:number }) => {
    const [newReply, setNewReply] = useState(false);
  
    return (
      <ReplyStyles
      variants={popUp}
      initial="hidden"
      animate="visible"
      exit="exit">
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
  

  export default ReplyComponent