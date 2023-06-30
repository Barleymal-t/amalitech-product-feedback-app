import React from 'react'
import { NewFeedback,InputSection } from './page_styles'
import { DropSelect } from '../components/Input';
import { Text,Button, TextArea } from '../components/components_styles';
import editIcon from "../assets/shared/icon-edit-feedback.svg";


const EditFeedbackPage = () => {
  
  return (
    <NewFeedback>
        <img src={editIcon} alt="" />
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
<label htmlFor="status">
    <h3>Update Status</h3>
    <p>Change feedback status</p>
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
<div className="flex">

  <Button color="red">Delete</Button>
<div className="buttons">
  
  <Button color="deepBlue">Cancel</Button>
  <Button color="purple">Save Changes</Button>
</div>
</div>
</form>
    </NewFeedback>
  )
}

export default EditFeedbackPage