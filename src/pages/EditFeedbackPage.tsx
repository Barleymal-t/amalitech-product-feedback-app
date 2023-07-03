import { NewFeedback, InputSection } from "./page_styles";
import { DropSelect } from "../components/Input";
import { Text, Button, TextArea } from "../components/components_styles";
import editIcon from "../assets/shared/icon-edit-feedback.svg";
import { categoryOptions } from "./NewFeedbackPage";
import { useForm, SubmitHandler } from "react-hook-form";
import { category } from "./NewFeedbackPage";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { request, suggestionEdited } from "../../store/suggestionsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Params } from "./SuggestionDetailsPage";

export type status = "suggestion" | "planned" | "in-progress" | "live";

const statusOptions:status[] = ["suggestion", "planned", "in-progress", "live"];

type Inputs = {
  title: string;
  category: category;
  status:status;
  description: string;
};

const EditFeedbackPage = () => {
  const params = useParams<Params>()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const productRequests = useSelector(
    (state: RootState) => state.request
  );

  const suggestion:request |undefined = productRequests.find(
    (suggestion) => suggestion.id === parseInt(params.id ?? "0")
  );
  


  const {register,handleSubmit,watch} = useForm<Inputs>({
    defaultValues: {
title: suggestion?.title,
category: suggestion?.category,
status:suggestion?.status,
description:suggestion?.description,
    }
  })

  const submitData:SubmitHandler<Inputs> = (editedData)=> {
dispatch(suggestionEdited({id:params.id,...editedData}))
navigate("../")
  }
  return (
    <NewFeedback>
      <img src={editIcon} alt="" />
      <h1>Create New Feedback</h1>
      <form action="" 
      onSubmit={handleSubmit(submitData)}>
        <InputSection>
          <label htmlFor="title">
            <h3>Feedback Title</h3>
            <p>Add a short descriptive headline</p>
          </label>
          <Text {...register("title")}/>
        </InputSection>
        <InputSection>
          <label htmlFor="category">
            <h3>Category</h3>
            <p>Choose a category for your feedback</p>
          </label>
          <DropSelect {...register("category")}  options={categoryOptions} />
        </InputSection>
        <InputSection>
          <label htmlFor="status">
            <h3>Update Status</h3>
            <p>Change feedback status</p>
          </label>
          <DropSelect {...register("status")}  options={statusOptions} />
        </InputSection>
        <InputSection>
          <label htmlFor="description">
            <h3>Feedback Detail</h3>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
          </label>
          <TextArea {...register("description")} />
        </InputSection>
        <div className="flex">
          <Button color="red">Delete</Button>
          <div className="buttons">
            <Button color="deepBlue">Cancel</Button>
            <Button color="purple">Save Changes</Button>
          </div>
        </div>
      </form>
      <pre>{JSON.stringify(watch(),null,2)}</pre>
    </NewFeedback>
  );
};

export default EditFeedbackPage;
