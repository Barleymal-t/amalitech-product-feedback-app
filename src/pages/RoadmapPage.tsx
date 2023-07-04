import { BackBtn } from "../components/Button";
import { AddFeedback } from "../components/Button";
import { Roadmap } from "./page_styles";
import RoadmapCard from "../components/RoadmapCard";
import RoadmapColumn from "../components/RoadmapColumn";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const RoadmapPage = () => {
  const productRequests = useSelector((state: RootState) => state.request);
  return (
    <Roadmap>
      <div className="headbar">
        <div className="back">
          <BackBtn color="deepBlue" />
          <h2>Roadmap</h2>
        </div>
        <AddFeedback />
      </div>
      <RoadmapColumn productRequests={productRequests} />
    </Roadmap>
  );
};

export default RoadmapPage;
