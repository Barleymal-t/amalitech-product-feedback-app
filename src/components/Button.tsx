import React from "react";
import { Button, BackButton, Vote, H4 } from "./components_styles";
import { IoIosArrowBack } from "react-icons/io";
import plus from "../assets/shared/icon-plus.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  suggestionUnUpvoted,
  suggestionUpvoted,
} from "../store/suggestionsSlice";

export const Btn = ({
  children,
  color,
  onClick,
}: {
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
}) => {
  return (
    <Button color={color} onClick={onClick}>
      <H4>{children}</H4>
    </Button>
  );
};

export const BackBtn = ({ color }: { color?: string }) => {
  const navigate = useNavigate();
  return (
    <BackButton onClick={() => navigate("../")} color={color}>
      <IoIosArrowBack />
      <H4>Go Back</H4>
    </BackButton>
  );
};

export const UpVote = ({
  value,
  id,
  upvoted,
}: {
  value: number;
  id: number;
  upvoted: boolean;
}) => {
  const dispatch = useDispatch();
  const handleUpvoteClick = () => {
    if (!upvoted) {
      dispatch(suggestionUpvoted(id));
    } else {
      dispatch(suggestionUnUpvoted(id));
    }
  };

  return (
    <Vote
    aria-pressed={upvoted} 
     onClick={() => handleUpvoteClick()} $active={upvoted}>
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 6l4-4 4 4"
          stroke="#4661E6"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      <H4>{value}</H4>
    </Vote>
  );
};

export const AddSuggestion = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/Suggestion/new")} color="purple">
      <img src={plus} alt="plus" />
      <H4>Add Suggestion</H4>
    </Button>
  );
};
