import {useState} from 'react'
import { Text,Drop,Menu } from "./components_styles"
import { IoIosArrowDown,IoIosCheckmark } from "react-icons/io"
import check from '../assets/shared/icon-check.svg'

export const TextField = ({error}:{error?:boolean}) => {
  return (
    <Text error={error} placeholder="Hello"/>
  )
}
const options= [
  "first","second","third"
]

export const DropDown =()=> {
  const [show,setShow] = useState(false)
  const [select,setSelect] = useState(options[0])
  return (
    <Drop >
      <div className="heading" onClick={()=>setShow(!show)}>
{select}
<IoIosArrowDown/>
      </div>
      {show &&
      <Menu>
{options.map(option=><li onClick={()=>setSelect(option)}>{option}{option===select && <img src={check} alt="" /> }</li>)}
      </Menu>
      }
    </Drop>
  )
}