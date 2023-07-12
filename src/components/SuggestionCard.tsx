import {
  Suggestion,
  Cat,
  Comments,
  H3,
  Bottom,
  Mobile,
} from "./components_styles";
import { UpVote } from "./Button";
import comment from "../assets/shared/icon-comments.svg";
import { useNavigate } from "react-router-dom";
import { popUp } from "../pages/SuggestionsPage";
import { dropIn } from "./AddSuggestionModal";


const SuggestionCard = ({ ...suggestion }) => {
  const navigate = useNavigate();
  return (
    <Suggestion
    variants={popUp}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <UpVote
        value={suggestion.upvotes}
        id={suggestion.id}
        upvoted={suggestion.upvoted}
      />
      <div
        onClick={() => navigate(`/suggestion/${suggestion.id}`)}
        className="main"
      >
        <H3>{suggestion.title}</H3>
        <p>{suggestion.description}</p>
        <Cat>{suggestion.category}</Cat>
      </div>
      <Bottom>
        <Comments onClick={() => navigate(`/Suggestion/${suggestion.id}`)}>
          <img src={comment} alt="comment" />
          <p>{suggestion["comments"]?.length || 0}</p>
        </Comments>
        <Mobile>
          <div className=""></div>
          <UpVote
            value={suggestion.upvotes}
            id={suggestion.id}
            upvoted={suggestion.upvoted}
          />
        </Mobile>
      </Bottom>
    </Suggestion>
  );
};

export default SuggestionCard;
