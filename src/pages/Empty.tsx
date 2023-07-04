import { EmptySuggestions } from "./page_styles";
import { AddFeedback } from "../components/Button";
import { H1 } from "../components/components_styles";

const Empty = () => {
  return (
    <EmptySuggestions>
      <img
        src="../../public/assets/suggestions/illustration-empty.svg"
        alt=""
      />
      <H1>There is no feedback yet.</H1>
      <p>
        Got a suggestion? Found a bug that needs to be squashed?
        <br /> We love hearing about new ideas to improve our app.
      </p>
      <AddFeedback/>
    </EmptySuggestions>
  );
};

export default Empty;
