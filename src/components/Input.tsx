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

export const DropDown = () => {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(options[0]);
  return (
    <Drop>
      <div className="heading" onClick={() => setShow(!show)}>
        Sort by :<b>{select}</b>
        <IoIosArrowDown />
      </div>
      {show && (
        <Menu>
          {options.map((option) => (
            <li onClick={() => setSelect(option)}>
              {option}
              {option === select && <img src={check} alt="" />}
            </li>
          ))}
        </Menu>
      )}
    </Drop>
  );
};
