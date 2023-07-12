import { useDispatch } from "react-redux";
import { replyAdded } from "../store/suggestionsSlice";
import { useState } from "react";
import { TextArea,Button } from "./components_styles";
import { motion } from "framer-motion";
import { popUp } from "../pages/SuggestionsPage";

const ReplyForm = ({ replyingTo,sugId,comId,setNewReply }: { replyingTo: string,sugId:number,comId?:number, setNewReply:(newReply: boolean) => void }) => {
    const dispatch = useDispatch();
  
    const [content, setContent] = useState("");
    const submitReply = () => {
      dispatch(replyAdded({sugId,comId,replyingTo,content}))
      setContent("");
      setNewReply(false)
    };
    return (
      <motion.form
      variants={popUp}
      initial="hidden"
      animate="visible"
      exit="exit"
       onSubmit={() => replyAdded} className="flex">
        <TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={250}
          placeholder={`Type your reply to @${replyingTo}'s comment`}
        />
        <div className="">
        <Button color="purple" type="button" onClick={submitReply}>
          Post Reply
        </Button>
        </div>
      </motion.form>
    );
  };

  export default ReplyForm