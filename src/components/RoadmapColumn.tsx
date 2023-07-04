import RoadmapCard from "../components/RoadmapCard";
import { request,requestsType } from "../../store/suggestionsSlice";
import { H1,H2,H3 } from "./components_styles";

const RoadmapColumn = ({
  productRequests,
}: {
  productRequests: requestsType;
}) => {
  const description: { [key: string]: string } = {
    planned: "Ideas prioritized for research",
    "in-progress": "Currently being developed",
    live: "Released features",
  };
  const statuses = Array.from(
    new Set<string>(productRequests.map((item:request) => item.status))
  );

  const index = statuses.indexOf("suggestion");
  if (index > -1) {
    statuses.splice(index, 1);
  }
  const columns: { [x in string]: object[] } = {};

  statuses.forEach((element) => {
    columns[`${element}`] = productRequests.filter(
      (request) => request.status === element
    );
  });

  const content = Object.keys(columns).map((key) => (
    <div className={`${key} column`}>
      <span className="">
        <H2>{`${key} (${columns[key].length})`}</H2>
        <p>{description[key]}</p>
      </span>
      {columns[key].map((request) => (
        <RoadmapCard {...request} />
      ))}
    </div>
  ));
  return <div className="content">{content}</div>;
};

export default RoadmapColumn;
