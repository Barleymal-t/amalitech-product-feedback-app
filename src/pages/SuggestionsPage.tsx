import {
  CustomizationPane,
  SuggestionsSection,
  Suggestions,
} from "./page_styles";
import SuggestionCard from "../components/SuggestionCard";
import bulb from "../assets/suggestions/icon-suggestions.svg";
import { DropDown } from "../components/Input";
import { CatButton } from "../components/components_styles";
import { useEffect, useState } from "react";
import Empty from "./Empty";
import { AddFeedback } from "../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  addRequest,
  editRequest,
  deleteRequest,
} from "../../store/requestSlice";

const SuggestionsPage = () => {
  const productRequests = useSelector(
    (state: RootState) => state.request.requests
  );
  const dispatch = useDispatch();

  // console.log(productRequests)

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

  const statefulSorter = () => {
    if (sortParameter === "Least Upvotes") {
      showSuggestions.sort((a, b) => {
        return a.upvotes - b.upvotes;
      });
    } else if (sortParameter === "Most Upvotes") {
      showSuggestions.sort((a, b) => {
        return b.upvotes - a.upvotes;
      });
    } else if (sortParameter === "Least Comments") {
      showSuggestions.sort((a, b) => {
        return (a.comments?.length || 0) - (b.comments?.length || 0);
      });
    } else if (sortParameter === "Most Comments") {
      showSuggestions.sort((a, b) => {
        return (b.comments?.length || 0) - (a.comments?.length || 0);
      });
    }
  };
  useEffect(() => {
    statefulSorter();
    console.log(showSuggestions);
  }, [showSuggestions]);

  return (
    <Suggestions>
      <CustomizationPane>
        <div className="label">
          <h1>Frontend Mentor</h1>
          <p>Feedback Board</p>
        </div>
        <div className="categories">
          {categories.map((category) => (
            <CatButton
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
            <a href="#">View</a>
          </div>
          <div className="content">
            <div className="mt-6 flex flex-col gap-2">
              {statuses
                .filter((stat: string) => stat !== "suggestion")
                .map((stat) => {
                  const result = showSuggestions.filter(
                    (p) => p.status === stat
                  );

                  return (
                    <div
                      key={stat}
                      className="grid items-center grid-cols-[auto_1fr_auto] gap-x-4"
                    >
                      <li>
                        <div className="">

                      <div className={"dot" + ` ${stat}`}></div>
                        {stat.charAt(0).toUpperCase()}{stat.slice(1)}
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
          </div>
        </div>
      </CustomizationPane>
      <SuggestionsSection>
        <section className="headbar">
          <div className="left">
            <img src={bulb} alt="" />
            <p>{productRequests.length}</p>
            <DropDown setSortParameter={setSortParameter} />
          </div>
          <Link to="new">
            <AddFeedback />
          </Link>
        </section>
        <section className="suggestions">
          {showSuggestions.length === 0 ? (
            <Empty />
          ) : (
            showSuggestions.map((item) => (
              // <Link to='feedback' state={item} >
              <SuggestionCard key={item.id} {...item} />
              // </Link>
            ))
          )}
        </section>
      </SuggestionsSection>
    </Suggestions>
  );
};

export default SuggestionsPage;
