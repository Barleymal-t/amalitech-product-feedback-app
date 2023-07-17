import { useState } from "react";
import { useDispatch } from "react-redux";
import { commentAdded } from "../store/suggestionsSlice";
import { AddComment } from "../pages/page_styles";
import { Button, H1, TextArea } from "./components_styles";

const AddCommentComponent = ({ sugId }: { sugId: number }) => {
  const dispatch = useDispatch();

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
        <div className="">
          <Button color="purple" type="button" onClick={submitComment}>
            Post Comment
          </Button>
        </div>
      </div>
      {/* <pre>{JSON.stringify(watch(),null,2)}</pre> */}
    </AddComment>
  );
};

export default AddCommentComponent;
