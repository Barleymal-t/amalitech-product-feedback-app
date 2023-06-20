import { CustomizationPane, SuggestionsSection, Suggestions } from "./page_styles";
import data from "../assets/data.json";
import SuggestionCard from "../components/SuggestionCard";
import { Btn } from "../components/Button";
import plus from "../assets/shared/icon-plus.svg";
import bulb from "../assets/suggestions/icon-suggestions.svg";
import { DropDown } from "../components/Input";
import { CatBtn } from "../components/components_styles";
import { useState } from "react";

const SuggestionsPage = () => {
  const [activeCategory,setActiveCategory]= useState("All")
  const categories =Array.from(new Set<string>(data.productRequests.map(item=>item.category)))
  categories.push("All","UI","UX")
  console.log(categories)
  categories.sort()

  const showSuggestions = activeCategory === "All"?data.productRequests : data.productRequests.filter(suggestion=>suggestion.category===activeCategory)

  return (<Suggestions>
  <CustomizationPane>
    <div className="label">
      <h1>Frontend Mentor</h1>
      <p>Feedback Board</p>
    </div>
    <div className="categories">
      {categories.map(category=> <CatBtn $active={category===activeCategory} onClick={()=>setActiveCategory(category)}>{category}</CatBtn>)}
    </div>
    <div className="roadmap">
      <div className="heading">
        <h1>Roadmap</h1>
        <a href="#">View</a>
      </div>
      <div className="content">
        <li>Planned <span>{showSuggestions.filter(x=> x.status==="planned").length}</span></li>
        <li>In-Progress <span>{showSuggestions.filter(x=> x.status==="in-progress").length}</span></li>
        <li>Live <span>{showSuggestions.filter(x=> x.status==="live").length}</span></li>
      </div>
    </div>
    
  </CustomizationPane>
    <SuggestionsSection>

      <section className="headbar">
        <div className="left">
          <img src={bulb} alt="" /><p>{data.productRequests.length}</p>
          <DropDown />
        </div>
        <Btn color="purple">
          <img src={plus} alt="plus" />
          Add Feedback
        </Btn>
      </section>
      <section className="suggestions">
        {showSuggestions.map((item) => (
          <SuggestionCard {...item} />
        ))}
      </section>
    </SuggestionsSection>
  </Suggestions>
  );
};

export default SuggestionsPage;
