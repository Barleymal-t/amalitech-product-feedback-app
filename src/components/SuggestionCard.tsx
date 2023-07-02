import { Suggestion, Cat, Comments,H3 } from "./components_styles";
import { UpVote } from "./Button";
import  comment  from "../assets/shared/icon-comments.svg";
import {  useNavigate } from "react-router-dom";


const SuggestionCard = ({...suggestion}) => {
  const navigate = useNavigate()
  return (
    <Suggestion >
      <UpVote value={suggestion.upvotes} id={suggestion.id} upvoted={suggestion.upvoted}  />
      <div className="main">
        <H3 onClick={()=>navigate(`feedback/${suggestion.id}`)}>{suggestion.title}</H3>
        <p>{suggestion.description}</p>
        <Cat>{suggestion.category}</Cat>
      </div>
      <Comments>
        <img src={comment} alt="comment" />
        <p>{suggestion["comments"]?.length || 0}</p>
      </Comments>
    </Suggestion>
  );
};

export default SuggestionCard;
