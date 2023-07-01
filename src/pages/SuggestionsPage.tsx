import {
  CustomizationPane,
  SuggestionsSection,
  Suggestions,
} from "./page_styles";
import SuggestionCard from "../components/SuggestionCard";
import bulb from "../assets/suggestions/icon-suggestions.svg";
import { DropDown } from "../components/Input";
import { CatButton } from "../components/components_styles";
import { useState } from "react";
import Empty from "./Empty";
import { AddFeedback } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Status } from "./page_styles";

const SuggestionsPage = () => {
  const productRequests = useSelector(
    (state: RootState) => state.request
  );

  const [activeCategory, setActiveCategory] = useState("All");
  const [sortParameter, setSortParameter] = useState("");
  const categories = Array.from(
    new Set<string>(productRequests.map((item) => item.category))
  );
  const statuses = Array.from(
    new Set<string>(productRequests.map((item) => item.status))
  );

  categories.push("All", "UI", "UX");
  categories.sort();
  const showSuggestions =
    activeCategory === "All"
      ? productRequests
      : productRequests.filter(
          (suggestion) => suggestion.category === activeCategory
        );
        



  let sortedSuggestions

switch (sortParameter) {
  case "Least Upvotes":
    sortedSuggestions = showSuggestions.slice().sort((a, b) => {
      return a.upvotes - b.upvotes;
    });
    break;
  case "Most Upvotes":
    sortedSuggestions = showSuggestions.slice().sort((a, b) => {
      return b.upvotes - a.upvotes;
    });
    break;
  case "Least Comments":
    sortedSuggestions = showSuggestions.slice().sort((a, b) => {
      return (a.comments?.length || 0) - (b.comments?.length || 0);
    });
    break;
  case "Most Comments":
    sortedSuggestions = showSuggestions.slice().sort((a, b) => {
      return (b.comments?.length || 0) - (a.comments?.length || 0);
    });
    break;
  default:
    sortedSuggestions = showSuggestions
}
const navigate = useNavigate()
  return (
    <Suggestions>
      <CustomizationPane>
        <div className="label">
          <h1>Frontend Mentor</h1>
          <p>Feedback Board</p>
        </div>
        <div className="categories">
          {categories.map((category,index) => (
            <CatButton
            key={index}
              $active={category === activeCategory}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CatButton>
          ))}
        </div>
        <div className="roadmap">
          <div className="heading">
            <h1>Roadmap</h1>
            <span onClick={()=>navigate("/roadmap")}>View</span>
          </div>
          <Status>
            <div>
              {statuses
                .filter((stat: string) => stat !== "suggestion")
                .map((stat) => {
                  const result = showSuggestions.filter(
                    (p) => p.status === stat
                  );

                  return (
                    <div key={stat}>
                      <li>
                        <div className="">
                          <div className={"dot" + ` ${stat}`}></div>
                          {stat}
                        </div>
                        <span>{result.length}</span>
                      </li>
                    </div>
                  );
                })}
            </div>

            {/* <li>Planned <span>{showSuggestions.filter(x=> x.status==="planned").length}</span></li>
        <li>In-Progress <span>{showSuggestions.filter(x=> x.status==="in-progress").length}</span></li>
      <li>Live<span>{showSuggestions.filter(x=> x.status==="live").length}</span></li> */}
          </Status>
        </div>
      </CustomizationPane>
      <SuggestionsSection>
        <section className="headbar">
          <div className="left">
            <img src={bulb} alt="" />
            <p>{productRequests.length}</p>
            <DropDown setSortParameter={setSortParameter} />
          </div>
            <AddFeedback />
        </section>
        <section className="suggestions">
          {showSuggestions.length === 0 ? (
            <Empty />
          ) : (
            sortedSuggestions.map((item) => (
              <SuggestionCard key={item.id} {...item} />
            ))
          )}
        </section>
      </SuggestionsSection>
    </Suggestions>
  );
};

export default SuggestionsPage;
