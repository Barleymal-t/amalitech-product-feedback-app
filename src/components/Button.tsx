import React from 'react'
import { Button,BackButton,Vote } from './components_styles'
import {IoIosArrowBack } from "react-icons/io"
import plus from "../assets/shared/icon-plus.svg";



export const Btn = ({children,color}:{children:React.ReactNode,color:string}) => {
  return (
    <Button color={color}>
        {children}
        </Button>
  )
}

export const BackBtn = ({color}:{color?:string})=> {
  return (
    <BackButton color={color}>
      <IoIosArrowBack/>
      Go Back
    </BackButton>
  )
}

export const UpVote = ({value,setValue}:{value:number,setValue:React.Dispatch<any>})=>{
  
  return (
    <Vote onClick={()=>setValue(value+1)}>
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
      {value}
    </Vote>
  )
}

export const AddFeedback =()=> {
  return (
    <Btn color="purple">
    <img src={plus} alt="plus" />
    Add Feedback
  </Btn>
  )
}
