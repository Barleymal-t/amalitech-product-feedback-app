import { EmptySuggestions } from "./page_styles";
import { AddSuggestion } from "../components/Button";
import { H1 } from "../components/components_styles";

const Empty = ({onClick}:{onClick:()=>void}) => {
  return (
    <EmptySuggestions>
      <img
        src="/assets/suggestions/illustration-empty.svg"
        alt="No suggestions"
      />
      <H1>There is no Suggestion yet.</H1>
      <p>
        Got a suggestion? Found a bug that needs to be squashed?
        <br /> We love hearing about new ideas to improve our app.
      </p>
      <div className="">

      <AddSuggestion onClick={onClick}/>
      </div>
    </EmptySuggestions>
  );
};

export default Empty;
