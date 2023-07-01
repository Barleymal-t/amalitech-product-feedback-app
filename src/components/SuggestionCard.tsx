import { useState } from 'react'
import { Suggestion, Cat, Comments } from "./components_styles";
import { UpVote } from "./Button";
import  comment  from "../assets/shared/icon-comments.svg";
import { Link, useNavigate } from "react-router-dom";


const SuggestionCard = ({...suggestion}) => {
  const navigate = useNavigate()
  return (
    <Suggestion >
      <UpVote value={suggestion.upvotes}  />
      <div className="main">
        <h3 onClick={()=>navigate(`feedback/${suggestion.id}`)}>{suggestion.title}</h3>
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
