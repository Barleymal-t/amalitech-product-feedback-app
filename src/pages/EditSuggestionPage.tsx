import { NewSuggestion, InputSection } from "./page_styles";
import { DropSelect } from "../components/Input";
import { H1, H3, Text, Button, TextArea } from "../components/components_styles";
import editIcon from "../assets/shared/icon-edit-feedback.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { category } from "./NewSuggestionPage";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Request, suggestionDeleted, suggestionEdited } from "../store/suggestionsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Params } from "./SuggestionDetailsPage";
import { Error } from "../components/components_styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { suggestionSchema } from "../validation";

export type status = "suggestion" | "planned" | "in-progress" | "live";

const statusOptions:status[] = ["suggestion", "planned", "in-progress", "live"];
const categoryOptions:category[] = ["feature", "UI", "UX", "enhancement", "bug"];

type Inputs = {
  title: string;
  category: category;
  status:status;
  description: string;
};

const EditSuggestionPage = () => {
  const params = useParams<Params>()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const productRequests = useSelector(
    (state: RootState) => state.request
  );

  const suggestion:Request |undefined = productRequests.find(
    (suggestion) => suggestion.id === parseInt(params.id ?? "0")
  );
  


  const {register,handleSubmit,setValue, formState:{errors}} = useForm<Inputs>({
    defaultValues: {
title: suggestion?.title,
category: suggestion?.category,
status:suggestion?.status,
description:suggestion?.description,
    },
    resolver:zodResolver(suggestionSchema)
  })

  const submitData:SubmitHandler<Inputs> = (editedData)=> {
    if(suggestion?.id) {
      dispatch(suggestionEdited({id:suggestion.id,...editedData}))
      navigate("../")
    }
  }
  return (

    <NewSuggestion>
      <img src={editIcon} alt="" />
      <H1>Editing '{suggestion?.title}'</H1>
      <form action="" 
      onSubmit={handleSubmit(submitData)}>
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
          <DropSelect {...register("category")} setValue={setValue} value={suggestion?.category}  options={categoryOptions} />
        </InputSection>
        <InputSection>
          <label htmlFor="status">
            <H3>Update Status</H3>
            <p>Change Suggestion status</p>
          </label>
          <DropSelect {...register("status")} setValue={setValue} value={suggestion?.status}  options={statusOptions} />
        </InputSection>
        <InputSection>
          <label htmlFor="description">
            <H3>Suggestion Detail</H3>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
          </label>
          <TextArea {...register("description")} />
          <Error>{errors["description"]?.message}</Error>
        </InputSection>
        <div className="flex">
          <Button color="red" type="button" onClick={()=>{dispatch(suggestionDeleted(suggestion?.id))
          navigate("/")}}>Delete</Button>
          <div className="buttons flex">
            <Button color="deepBlue" type="button"  onClick={()=>navigate("../")}>Cancel</Button>
            <Button color="purple" type="submit">Save Changes</Button>
          </div>
        </div>
      </form>
    </NewSuggestion>
  );
};

export default EditSuggestionPage;
