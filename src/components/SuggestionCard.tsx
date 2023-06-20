import { Suggestion, Cat } from "./components_styles";
import { UpVote } from "./Button";
import  comment  from "../assets/shared/icon-comments.svg";

const SuggestionCard = ({...suggestion}) => {
  return (
    <Suggestion >
      <UpVote value={suggestion.upvotes} />
      <div className="main">
        <h3>{suggestion.title}</h3>
        <p>{suggestion.description}</p>
        <Cat>{suggestion.category}</Cat>
      </div>
      <div className="comments">
        <img src={comment} alt="comment" />
        <p>{suggestion["comments"]?.length}</p>
      </div>
    </Suggestion>
  );
};

export default SuggestionCard;
