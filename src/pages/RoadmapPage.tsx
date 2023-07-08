import { BackBtn } from "../components/Button";
import { AddSuggestion } from "../components/Button";
import { Roadmap } from "./page_styles";
import { H1, H2, H3 } from "../components/components_styles";
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
          <H2>Roadmap</H2>
        </div>
        <AddSuggestion />
      </div>
      <RoadmapColumn productRequests={productRequests} />
    </Roadmap>
  );
};

export default RoadmapPage;
