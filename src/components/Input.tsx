import React, { useState } from "react";
import { Text, Drop, Menu, Select, RealSelect } from "./components_styles";
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
    setTimeout(() => setShow(!show), 1000);
  };

  return (
    <Drop>
      <div className="heading" onClick={() => setShow(!show)}>
        Sort by :<b>{select}</b>
        <IoIosArrowDown />
      </div>
      {show && (
        <Menu>
          {sortOptions.map((option,index) => (
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
  HTMLSelectElement,
  {
    options: string[];
    value?: string;
  }
>((props, ref) => {
  return (
    <RealSelect {...props} ref={ref}>
      {props.options.map((option,index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </RealSelect>
  );
});

// export const DropSelect = React.forwardRef<
//   HTMLInputElement,
//   {
//     options: string[];
//     value?: string;
//   }
// >((props, ref) => {
//   // useEffect(() => {
//   //   ref.current = select
//   // });

//   const [show, setShow] = useState(false);
//   const [select, setSelect] = useState(props.value || props.options[0]);
//   const submit = useRef(null)

// const setParameter = (option: string) => {
//   setSelect(option);
//   setSortParameter(option);
//   setTimeout(() => setShow(!show), 1000);
  
  // ref.current = select
  // ref && ref.value = select
  // document.getElementById(`${props.name} hidden`) && document.getElementById(`${props.name} hidden`).value = select;
// };
// // console.log()
//   return (
//     <Select>
//       <div className="heading" onClick={() => setShow(!show)}>
//         {select}
//         {/* <input
//         type="hidden"
//         // id={`${props.name} hidden`}
//         value={select}
//         ref={ref}
//         onChange={(e) => setSelect(e.target.value)}

//         {...props}
//         /> */}
//         <IoIosArrowDown />
//       </div>
//       {show && (
//         <Menu>
//           {props.options.map((option,index) => (
//             <li
      // id={index}
//               onClick={() => setParameter}
//             >
//               {option}
//               {option === select && <img src={check} alt="" />}
//             </li>
//           ))}
//         </Menu>
//       )}
//     </Select>
//   );

// });
