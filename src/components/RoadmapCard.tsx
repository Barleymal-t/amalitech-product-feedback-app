import { Card, Cat, Comments } from "./components_styles";
import { UpVote } from "./Button";
import comment from "../assets/shared/icon-comments.svg";
import { Status } from "../pages/page_styles";
import { useNavigate } from "react-router-dom";

const RoadmapCard = ({ ...suggestion }) => {
  const navigate = useNavigate()
  const { id, title, description, category, status, upvotes } = suggestion;
  return (
    <Card>
      <Status>
        <div className="">
          <div>
            <li>
              <div className="">
                <div className={"dot" + ` ${status}`}></div>
                {status}
              </div>
            </li>
          </div>
        </div>
      </Status>
      <h3 onClick={()=>navigate(`feedback/${id}`)}>{title}</h3>
      <p>{description}</p>
      <div className="category">

      <Cat>{category}</Cat>
      </div>
      <div className="bottom">
        <UpVote value={upvotes} />
        <Comments>
          <img src={comment} alt="comment" />
          <p>{suggestion["comments"]?.length || 0}</p>
        </Comments>
      </div>
    </Card>
  );
};

export default RoadmapCard;
