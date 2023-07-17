import React, { useState } from "react";
import { Text, Drop, Menu, Select, H4 } from "./components_styles";
import { IoIosArrowDown } from "react-icons/io";
import check from "../assets/shared/icon-check.svg";

export const TextField = ({ error }: { error?: boolean }) => {
  return <Text error={error} placeholder="Hello" />;
};
const sortOptions = [
  "most upvotes",
  "least upvotes",
  "most comments",
  "least comments",
];

export const DropDown = ({
  setSortParameter,
}: {
  setSortParameter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(sortOptions[0]);

  const setParameter = (option: string) => {
    setSelect(option);
    setSortParameter(option);
    setShow(!show);
  };

  return (
    <Drop>
      <div className="heading" onClick={() => setShow(!show)}>
        Sort by :<H4>{select}</H4>
        <IoIosArrowDown />
      </div>
      {show && (
        <Menu>
          {sortOptions.map((option, index) => (
            <li key={index} onClick={() => setParameter(option)}>
              {option}
              {option === select && <img src={check} alt="" />}
            </li>
          ))}
        </Menu>
      )}
    </Drop>
  );
};

export const DropSelect = React.forwardRef<
  HTMLInputElement,
  {
    name: string;
    options: string[];
    value?: string;
    setValue?: any;
  }
>(({name,options,value,setValue,...props}, ref) => {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(value || options[0]);

  const setOption = (option: string) => {
    setSelect(option);
    setShow(false);
    if(setValue){
      setValue(name, option);
    }
  };

  return (
    <Select>
      <div className="heading" onClick={() => setShow(!show)}>
        <input ref={ref} {...props} value={select} />
        <IoIosArrowDown />
      </div>
      {show && (
        <Menu>
          {options.map((option, index) => (
            <li key={index} onClick={() => setOption(option)}>
              {option}
              {option === select && <img src={check} alt="" />}
            </li>
          ))}
        </Menu>
      )}
    </Select>
  );
});
