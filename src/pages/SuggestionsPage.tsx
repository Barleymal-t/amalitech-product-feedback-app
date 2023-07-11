import {
  CustomizationPane,
  SuggestionsSection,
  Suggestions,
  Label,
  MobileLabel,
  Headbar,
} from "./page_styles";
import SuggestionCard from "../components/SuggestionCard";
import bulb from "../assets/suggestions/icon-suggestions.svg";
import { DropDown } from "../components/Input";
import { H1, H3, CatButton } from "../components/components_styles";
import { useState } from "react";
import Empty from "./Empty";
import { AddSuggestion } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Status } from "./page_styles";
import { requestsType } from "../store/suggestionsSlice";
import close from "../assets/shared/mobile/icon-close.svg"
import hamburger from "../assets/shared/mobile/icon-hamburger.svg"

const SuggestionsPage = () => {
  const [open,setOpen] = useState(false)


  const productRequests:requestsType = useSelector((state: RootState) => state.request);

  const [activeCategory, setActiveCategory] = useState("All");
  const [sortParameter, setSortParameter] = useState("most upvotes");
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

  let sortedSuggestions;

  switch (sortParameter) {
    case "least upvotes":
      sortedSuggestions = showSuggestions.slice().sort((a, b) => {
        return a.upvotes - b.upvotes;
      });
      break;
    case "most upvotes":
      sortedSuggestions = showSuggestions.slice().sort((a, b) => {
        return b.upvotes - a.upvotes;
      });
      break;
    case "least comments":
      sortedSuggestions = showSuggestions.slice().sort((a, b) => {
        return (a.comments?.length || 0) - (b.comments?.length || 0);
      });
      break;
    case "most comments":
      sortedSuggestions = showSuggestions.slice().sort((a, b) => {
        return (b.comments?.length || 0) - (a.comments?.length || 0);
      });
      break;
    default:
      sortedSuggestions = showSuggestions;
  }
  const navigate = useNavigate();
  return (
    <Suggestions>
        <MobileLabel>

          <div className="">

          <H1>Frontend Mentor</H1>
          <p>Suggestion Board</p>
          </div>
            
            <img src={open?close:hamburger} onClick={()=>setOpen(!open)} alt="close button" />
        </MobileLabel>
      <CustomizationPane $open={open}>
        <Label>

          <H1>Frontend Mentor</H1>
          <p>Suggestion Board</p>
        </Label>
        <div className="categories">
          {categories.map((category, index) => (
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
            <H1>Roadmap</H1>
            <span onClick={() => navigate("/roadmap")}>View</span>
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
        <Headbar>
          <div className="left">
            <div className="count">

            <img src={bulb} alt="" />
            <H3>{productRequests.length} Suggestions</H3>
            </div>
            <DropDown setSortParameter={setSortParameter} />
          </div>
          <AddSuggestion />
        </Headbar>
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
