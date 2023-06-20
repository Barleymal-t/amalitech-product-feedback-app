import { Suggestion, Cat } from "./components_styles";
import { UpVote } from "./Button";
import  comment  from "../assets/shared/icon-comments.svg";

const SuggestionCard = ({...suggestion}) => {
  // const suggestion = {
  //   id: 10,
  //   title: "Bookmark challenges",
  //   category: "feature",
  //   upvotes: 31,
  //   status: "in-progress",
  //   description: "Be able to bookmark challenges to take later on.",
  //   comments: [
  //     {
  //       id: 14,
  //       content:
  //         "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
  //       user: {
  //         image: "./assets/user-images/image-suzanne.jpg",
  //         name: "Suzanne Chang",
  //         username: "upbeat1811",
  //       },
  //     },
  //   ],
  // };
  // console.log(suggestion)
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
