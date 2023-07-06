import { Suggestion, Cat, Comments,H3, Bottom } from "./components_styles";
import { UpVote } from "./Button";
import  comment  from "../assets/shared/icon-comments.svg";
import {  useNavigate } from "react-router-dom";


const SuggestionCard = ({...suggestion}) => {
  const navigate = useNavigate()
  return (
    <Suggestion >
      <UpVote value={suggestion.upvotes} id={suggestion.id} upvoted={suggestion.upvoted}  />
      <div onClick={()=>navigate(`/feedback/${suggestion.id}`)} className="main">
        <H3 >{suggestion.title}</H3>
        <p>{suggestion.description}</p>
        <Cat>{suggestion.category}</Cat>
      </div>
      <Bottom>
      <Comments onClick={()=>navigate(`/feedback/${suggestion.id}`)}>
        <img src={comment} alt="comment" />
        <p>{suggestion["comments"]?.length || 0}</p>
      </Comments>
      <UpVote value={suggestion.upvotes} id={suggestion.id} upvoted={suggestion.upvoted}  />
      </Bottom>
    </Suggestion>
  );
};

export default SuggestionCard;
