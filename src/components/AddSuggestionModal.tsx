import ModalContainer from "./ModalContainer";
import { InputSection, NewSuggestion } from "../pages/page_styles";
import { Button, H1, H3 } from "./components_styles";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { newSuggestionSchema } from "../validation";
import { suggestionAdded } from "../store/suggestionsSlice";
import newIcon from "/assets/shared/icon-new-feedback.svg";
import { Error,Text,TextArea } from "./components_styles";
import { DropSelect } from "./Input";
import { dropIn } from "./animations";



export type category = "UI" | "UX" | "feature" | "bug" | "enhancement";

type Inputs = {
  title: string;
  category: category;
  description: string;
};

const categoryOptions:category[] = ["feature", "UI", "UX", "enhancement", "bug"];

const AddSuggestionModal=({onClick}:{onClick:()=>void})=>{
  const dispatch = useDispatch()

  const {register,handleSubmit,formState: {errors}} = useForm<Inputs>({
    defaultValues: {
title: "",
category: "feature",
description:""
    },
    resolver:zodResolver(newSuggestionSchema)
  })

  const submitNewData:SubmitHandler<Inputs> =(newData)=> {
    dispatch(suggestionAdded({...newData}))
    onClick()
  }
  return (
    <ModalContainer onClick={onClick}>
<NewSuggestion
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
>
      <img src={newIcon} alt="" />
      <H1>Create New Suggestion</H1>
      <form action="" onSubmit={handleSubmit(submitNewData)}>
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
          <Button color="deepBlue" onClick={onClick}>Cancel</Button>
          <Button color="purple" type="submit">Add Suggestion</Button>
        </div>
      </form>
    </NewSuggestion>
    </ModalContainer>
  );
};

export default AddSuggestionModal;

