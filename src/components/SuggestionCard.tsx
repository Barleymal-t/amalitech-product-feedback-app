import { useState } from 'react'
import { Suggestion, Cat } from "./components_styles";
import { UpVote } from "./Button";
import  comment  from "../assets/shared/icon-comments.svg";
import { Link } from "react-router-dom";


const SuggestionCard = ({...suggestion}) => {
  const [value, setValue] = useState(suggestion.upvotes)
  return (
    <Suggestion >
      <UpVote value={value} setValue={setValue} />
      <div className="main">
      <Link to={`feedback/${suggestion.id}`} >
        <h3>{suggestion.title}</h3>
      </Link>
        <p>{suggestion.description}</p>
        <Cat>{suggestion.category}</Cat>
      </div>
      <div className="comments">
        <img src={comment} alt="comment" />
        <p>{suggestion["comments"]?.length || 0}</p>
      </div>
    </Suggestion>
  );
};

export default SuggestionCard;
