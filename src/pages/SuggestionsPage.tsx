import { CustomizationPane, SuggestionsSection, Suggestions } from "./page_styles";
import data from "../assets/data.json";
import SuggestionCard from "../components/SuggestionCard";
import bulb from "../assets/suggestions/icon-suggestions.svg";
import { DropDown } from "../components/Input";
import { CatBtn } from "../components/components_styles";
import { useState } from "react";
import Empty from "./Empty";
import { AddFeedback } from "../components/Button";
import { Link } from "react-router-dom";

const SuggestionsPage = () => {
  const [activeCategory,setActiveCategory]= useState("All")
  const [sortParameter,setSortParameter] = useState("")
  const categories =Array.from(new Set<string>(data.productRequests.map(item=>item.category)))
  categories.push("All","UI","UX")
  categories.sort()

  const showSuggestions = activeCategory === "All"?data.productRequests : data.productRequests.filter(suggestion=>suggestion.category===activeCategory)

    if (sortParameter==="Least Upvotes"){
  showSuggestions.sort((a,b)=> {
    return a.upvotes-b.upvotes
    })
  }else if (sortParameter==="Most Upvotes"){
      showSuggestions.sort((a,b)=> {
        return b.upvotes-a.upvotes
        })

    }else if (sortParameter==="Least Comments") {
      showSuggestions.sort((a,b)=> {
        return (a.comments?.length || 0) - (b.comments?.length || 0)
        })
    }else if (sortParameter==="Most Comments") {
      showSuggestions.sort((a,b)=> {
        return (b.comments?.length || 0) - (a.comments?.length || 0)
        })
    }

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
        <li>Live<span>{showSuggestions.filter(x=> x.status==="live").length}</span></li>
      </div>
    </div>
    
  </CustomizationPane>
    <SuggestionsSection>

      <section className="headbar">
        <div className="left">
          <img src={bulb} alt="" /><p>{data.productRequests.length}</p>
          <DropDown setSortParameter={setSortParameter}/>
        </div>
        <AddFeedback/>
      </section>
      <section className="suggestions">
        {
        showSuggestions.length===0 ?
          <Empty/>
        :
          showSuggestions.map((item) => (
            <Link to='/feedback' state={item} >
          <SuggestionCard  key={item.id} {...item} />
            </Link>
        ))}
          
      </section>
    </SuggestionsSection>
  </Suggestions>
  );
};

export default SuggestionsPage;
