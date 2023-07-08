import { EmptySuggestions } from "./page_styles";
import { AddSuggestion } from "../components/Button";
import { H1 } from "../components/components_styles";

const Empty = () => {
  return (
    <EmptySuggestions>
      <img
        src="../../public/assets/suggestions/illustration-empty.svg"
        alt=""
      />
      <H1>There is no Suggestion yet.</H1>
      <p>
        Got a suggestion? Found a bug that needs to be squashed?
        <br /> We love hearing about new ideas to improve our app.
      </p>
      <AddSuggestion/>
    </EmptySuggestions>
  );
};

export default Empty;
