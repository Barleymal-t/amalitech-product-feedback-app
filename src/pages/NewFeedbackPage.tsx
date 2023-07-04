import { NewFeedback, InputSection } from "./page_styles";
import newIcon from "../assets/shared/icon-new-feedback.svg";
import { DropSelect } from "../components/Input";
import { H1,H2,H3, Text, Button, TextArea } from "../components/components_styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { suggestionAdded } from "../../store/suggestionsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



export type category = "UI" | "UX" | "feature" | "bug" | "enhancement";

type Inputs = {
  title: string;
  category: category;
  description: string;
};

export const categoryOptions:category[] = ["feature", "UI", "UX", "enhancement", "bug"];

const NewFeedbackPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {register,handleSubmit,} = useForm<Inputs>({
    defaultValues: {
title: "",
category: "feature",
description:""
    }
  })

  const submitData:SubmitHandler<Inputs> =({title,category,description})=> {
    dispatch(suggestionAdded(title,category,description))
    navigate("../")
  }

  return (
    <NewFeedback>
      <img src={newIcon} alt="" />
      <H1>Create New Feedback</H1>
      <form action="" onSubmit={handleSubmit(submitData)}>
        <InputSection>
          <label htmlFor="title">
            <H3>Feedback Title</H3>
            <p>Add a short descriptive headline</p>
          </label>
          <Text {...register("title")}/>
        </InputSection>
        <InputSection>
          <label htmlFor="category">
            <H3>Category</H3>
            <p>Choose a category for your feedback</p>
          </label>
          <DropSelect options={categoryOptions} {...register("category")} />
        </InputSection>
        <InputSection>
          <label htmlFor="description">
            <H3>Feedback Detail</H3>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
          </label>
          <TextArea  {...register("description")}  />
        </InputSection>
        <div className="buttons">
          <Button color="deepBlue" onClick={()=>navigate("../")}>Cancel</Button>
          <Button color="purple" type="submit">Add Feedback</Button>
        </div>
      </form>
    </NewFeedback>
  );
};

export default NewFeedbackPage;
