import { useState } from "react";
import RoadmapCard from "../components/RoadmapCard";
import { Request, requestsType } from "../store/suggestionsSlice";
import { H2, H3 } from "./components_styles";
import { motion } from "framer-motion";
import { popUp } from "./animations";

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
    new Set<string>(productRequests.map((item: Request) => item.status))
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

  const largeContent = Object.keys(columns).map((key) => (
    <motion.div
    variants={popUp}
    initial="hidden"
    animate="visible"
    exit="exit"
     className=" column">
      <span className="">
        <H2>{`${key} (${columns[key].length})`}</H2>
        <p>{description[key]}</p>
      </span>
      <motion.div
          variants={popUp}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`${key}`}>
         {columns[key].map((request) => (
           <RoadmapCard {...request} />
           ))}

        </motion.div>
    </motion.div>
  ));

  const [activeStatus, setActiveStatus] = useState("planned");
  const headings = Object.keys(columns).map((key) => (
    <H3
      className={`${key === activeStatus ? `active ${key}` : "inactive"}`}
      onClick={() => setActiveStatus(key)}
    >{`${key} (${columns[key].length})`}</H3>
  ));

  const content = (
    <div className={`${activeStatus} column`}>
      <span className="">
        <H2>{`${activeStatus} (${columns[activeStatus].length})`}</H2>
        <p>{description[activeStatus]}</p>
      </span>
      {columns[activeStatus].map((request) => (
        <RoadmapCard {...request} />
      ))}
    </div>
  );
  return (
    <>
      <div className="statusHeadings">{headings}</div>
      <div className="content small">{content}</div>
      <div className="content large">{largeContent}</div>;
    </>
  );
};

export default RoadmapColumn;
