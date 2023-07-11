import { NewSuggestion, InputSection } from "./page_styles";
import newIcon from "../assets/shared/icon-new-feedback.svg";
import { DropSelect } from "../components/Input";
import { H1,H3, Text, Button, TextArea, Error } from "../components/components_styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { suggestionAdded } from "../store/suggestionsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { suggestionSchema } from "../validation";



export type category = "UI" | "UX" | "feature" | "bug" | "enhancement";

type Inputs = {
  title: string;
  category: category;
  description: string;
};

const categoryOptions:category[] = ["feature", "UI", "UX", "enhancement", "bug"];

const NewSuggestionPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {register,handleSubmit,formState: {errors}} = useForm<Inputs>({
    defaultValues: {
title: "",
category: "feature",
description:""
    },
    resolver:zodResolver(suggestionSchema)
  })

  const submitData:SubmitHandler<Inputs> =({title,category,description})=> {
    dispatch(suggestionAdded(title,category,description))
    navigate("../")
  }

  return (
    <NewSuggestion>
      <img src={newIcon} alt="" />
      <H1>Create New Suggestion</H1>
      <form action="" onSubmit={handleSubmit(submitData)}>
        <InputSection>
          <label htmlFor="title">
            <H3>Suggestion Title</H3>
            <p>Add a short descriptive headline</p>
          </label>
          <Text {...register("title")}/>
          <Error>{errors["title"]?.message}</Error>
        </InputSection>
        <InputSection>
          <label htmlFor="category">
            <H3>Category</H3>
            <p>Choose a category for your Suggestion</p>
          </label>
          <DropSelect options={categoryOptions} {...register("category")} />
        </InputSection>
        <InputSection>
          <label htmlFor="description">
            <H3>Suggestion Detail</H3>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
          </label>
          <TextArea  {...register("description")}  />
          <Error>{errors["description"]?.message}</Error>
        </InputSection>
        <div className="buttons flex">
          <Button color="deepBlue" onClick={()=>navigate("../")}>Cancel</Button>
          <Button color="purple" type="submit">Add Suggestion</Button>
        </div>
      </form>
    </NewSuggestion>
  );
};

export default NewSuggestionPage;
