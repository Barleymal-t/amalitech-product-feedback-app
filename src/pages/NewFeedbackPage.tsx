import { NewFeedback,InputSection } from './page_styles'
import newIcon from "../assets/shared/icon-new-feedback.svg";
import { DropSelect } from '../components/Input';
import { Text,Button, TextArea } from '../components/components_styles';
// import {Button} from "../components/Button"

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IoMdOptions } from 'react-icons/io';


const NewFeedbackPage = () => {
  // const productRequests = useSelector(
  //   (state: RootState) => state.request.requests
  // );
  // // To be fixed later
  // const options = Array.from( new Set(productRequests.map(request=>request.category)))
  // options.push('UI','UX')
  // options.sort()
  return (
    <NewFeedback>
<img src={newIcon} alt="" />
<h1>Create New Feedback</h1>
<form action="">

<InputSection>
<label htmlFor="title">
    <h3>Feedback Title</h3>
    <p>Add a short descriptive headline</p>
</label>
<Text/>
</InputSection>
<InputSection>
<label htmlFor="category">
    <h3>Category</h3>
    <p>Choose a category for your feedback</p>
</label>
<DropSelect/>
</InputSection>
<InputSection>
<label htmlFor="category">
    <h3>Feedback Detail</h3>
    <p>Include any specific comments on what should be improved, added, etc.</p>
</label>
<TextArea name="category" id=""  />
</InputSection>
<div className="buttons">
  <Button color="deepBlue">Cancel</Button>
  <Button color="purple">Add Feedback</Button>
</div>
</form>
    </NewFeedback>
  )
}

export default NewFeedbackPage