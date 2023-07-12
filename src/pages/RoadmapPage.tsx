import { BackBtn } from "../components/Button";
import { AddSuggestion } from "../components/Button";
import { Roadmap } from "./page_styles";
import {  H2 } from "../components/components_styles";
import RoadmapColumn from "../components/RoadmapColumn";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";
import AddSuggestionModal from "../components/AddSuggestionModal";



const RoadmapPage = () => {
  const [modalOpen,setModalOpen] = useState(false)
const closeModal = ()=>setModalOpen(false) 
const openModal = ()=>setModalOpen(true) 

const toggleModal = ()=> {
  modalOpen ? closeModal():openModal()
}

  const productRequests = useSelector((state: RootState) => state.request);
  return (
    <>
    {modalOpen && <AddSuggestionModal onClick={toggleModal}/>}
    <Roadmap>
      <div className="headbar">
        <div className="back">
          <BackBtn color="deepBlue" />
          <H2>Roadmap</H2>
        </div>
        <div className="">
        <AddSuggestion onClick={toggleModal} />
        </div>
      </div>
      <RoadmapColumn productRequests={productRequests} />
    </Roadmap>
    </>
  );
};

export default RoadmapPage;
