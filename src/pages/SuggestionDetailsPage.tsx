import {
  SuggestionDetail,
  SuggestionTop,
  CommentsSection,
} from "./page_styles";
import { useNavigate, useParams } from "react-router-dom";
import SuggestionCard from "../components/SuggestionCard";
import { BackBtn } from "../components/Button";
import {
  H1,
  Button,
} from "../components/components_styles";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  Comment,
} from "../store/suggestionsSlice";
import AddCommentComponent from "../components/AddCommentComponent";
import CommentComponent from "../components/CommentComponent";

export type Params = {
  id: string;
};

const SuggestionDetailsPage = () => {
  const params = useParams<Params>();

  const navigate = useNavigate();
  const request = useSelector((state: RootState) =>
    state.request.find((request) => request.id === Number(params.id))
  );
  if (request) {
    return (
      <SuggestionDetail>
        <SuggestionTop>
          <div className="">

          <BackBtn />
          </div>
          <div className="">

          <Button color="lightBlue" onClick={() => navigate("edit")}>
            Edit Feedback
          </Button>
          </div>
        </SuggestionTop>
        <SuggestionCard {...request} />
        {request.comments &&
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
  }
        <AddCommentComponent sugId={request.id} />
      </SuggestionDetail>
    );
  } else {
    return <H1>No request found</H1>;
  }
};







export default SuggestionDetailsPage;
