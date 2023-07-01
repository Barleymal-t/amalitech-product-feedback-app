import React, { useState } from 'react'
import { Button,BackButton,Vote } from './components_styles'
import {IoIosArrowBack } from "react-icons/io"
import plus from "../assets/shared/icon-plus.svg";
import { Link, useNavigate } from 'react-router-dom';


export const Btn = ({children,color,onClick}:{children:React.ReactNode,color?:string,onClick?:()=>void}) => {
  return (
    <Button color={color} onClick={onClick}>
        {children}
        </Button>
  )
}

export const BackBtn = ({color}:{color?:string})=> {
  const navigate = useNavigate()
  return (
  
    <BackButton onClick={()=>navigate("../")} color={color}>
      <IoIosArrowBack/>
      Go Back
    </BackButton>
  )
}

export const UpVote = ({value}:{value:number})=>{
  const [upvoted,setUpvoted] = useState(false)
  return (
    <Vote  onClick={()=>setUpvoted(!upvoted)} $active={upvoted}>
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
      {upvoted ?value +1:value}
    </Vote>
  )
}

export const AddFeedback =()=> {
  const navigate = useNavigate()

  return (
    <Button onClick={()=>navigate("/feedback/new")} color="purple">
    <img src={plus} alt="plus" />
    Add Feedback
  </Button>
  )
}
