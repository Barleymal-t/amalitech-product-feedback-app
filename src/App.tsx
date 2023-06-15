import { useState } from "react";
import { BaseBtn, BackBtn, UpVote,Ux } from "./components/Button";
import {TextField,DropDown} from "./components/Input"


function App() {
  const [count, setCount] = useState(0);
  const [error,setError] = useState(true)

  return (
    <>
      <BaseBtn color="red">Hello</BaseBtn>
      <BackBtn color="deepBlue" />
      <UpVote onClick={() => setCount(count + 1)} count={count} />
      <Ux/>
      <TextField error={error}/>
      <DropDown/>
    </>
  );
}

export default App;
