import { useState } from "react";
import { Text, Drop, Menu } from "./components_styles";
import { IoIosArrowDown } from "react-icons/io";
import check from "../assets/shared/icon-check.svg";

export const TextField = ({ error }: { error?: boolean }) => {
  return <Text error={error} placeholder="Hello" />;
};
const options = [
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least Comments",
];

export const DropDown = ({setSortParameter}:{setSortParameter: React.Dispatch<React.SetStateAction<string>>}) => {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(options[0]);

  const setParameter= (option:string) =>{
    setSelect(option)
    setSortParameter(option)
  }

  return (
    <Drop>
      <div className="heading" onClick={() => setShow(!show)}>
        Sort by :<b>{select}</b>
        <IoIosArrowDown />
      </div>
      {show && (
        <Menu>
          {options.map((option) => (
            <li onClick={() => setParameter(option)}>
              {option}
              {option === select && <img src={check} alt="" />}
            </li>
          ))}
        </Menu>
      )}
    </Drop>
  );
};
