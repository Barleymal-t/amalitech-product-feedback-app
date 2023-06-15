import { Button,BackButton,Vote,Cat } from './components_styles'
import {IoIosArrowBack, IoIosArrowUp, } from "react-icons/io"


export const BaseBtn = ({children,color}:{children:string,color:string}) => {
  return (
    <Button color={color}>
        {children}
        </Button>
  )
}

export const BackBtn = ({color}:{color:string})=> {
  return (
    <BackButton color={color}>
      <IoIosArrowBack/>
      Go Back
    </BackButton>
  )
}

export const UpVote = ({count,onClick}:{count:number,onClick:()=>void})=>{
  return (
    <Vote onClick={onClick}>
      <IoIosArrowUp/>
      {count}
    </Vote>
  )
}
export const Ux = ()=>{
  return (
    <Cat>
      UX
    </Cat>
  )
}