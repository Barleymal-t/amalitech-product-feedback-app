import { styled } from "styled-components";
import { colors } from "../colors";

export const Button = styled.button.attrs((props) => ({
  color: colors[props.color as keyof typeof colors],
  hoverColor: colors[`hover${props.color}` as keyof typeof colors],
}))`
  background-color: ${({ color }) => color || "transparent"};
  color: ${({ color }) => (color ? "white" : colors.midGrey)};
  // max-width: ${({ color }) => (color ? "158px" : 0)};
  padding: 0 1.5rem;
  height: 44px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  gap: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: ${({ color, hoverColor }) =>
      color ? hoverColor : "transparent"};
  }
`;
export const BackButton = styled(Button)`
  height: 53px;
  &:hover {
    text-decoration: underline;
    background-color: ${({ color }) => color || "transparent"};
  }
`;

export const Cat = styled.button`
  background-color: ${colors.scorchedBlue};
  font-weight: bold;
  border-radius: 10px;
  border: none;
  text-transform: capitalize;
  padding: 6px 16px;
  height: 30px;
  width: max-content;
  color: ${colors.lightBlue};
`;

export const Vote = styled(Cat)<{ $active?: boolean }>`
  width: 40px;
  height: 53px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: ${colors.hoverscorchedBlue};
  }
  ${(props) =>
    props.$active &&
    `
    > svg path {
      stroke: ${colors.white};
    }
  color: ${colors.white};
  background-color: ${colors.lightBlue};
  `}
`;
export const CatButton = styled(Vote)`
  height: auto;
  width: auto;
`;

export const Text = styled.input<{ error?: boolean }>`
  height: 48px;
  // width: 255px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 24px;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.error ? colors.red : "transparent")};
  background: ${colors.scorchedBlue};
  &:hover {
    cursor:pointer;

  }
  &:active,
  &:focus {
    border: 1px solid
      ${(props) => (props.error ? colors.red : colors.lightBlue)};
  }
`;

export const TextArea = styled.textarea<{ error?: boolean }>`
height:96px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 24px;
  padding-top: 24px;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.error ? colors.red : "transparent")};
  background: ${colors.scorchedBlue};
  &:hover {
    cursor:pointer;

  }
  &:active,
  &:focus {
    border: 1px solid
      ${(props) => (props.error ? colors.red : colors.lightBlue)};
  }
  ` 

export const Drop = styled.div`
  z-index: 10;
  height: 48px;
  width: 255px;
  > div {
    cursor: pointer;
    background: transparent;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    border-radius: 5px;
  }
`;
export const Select = styled(Drop)`
  > div {
    background: ${colors.lightGrey};
  }
  border-radius: 10px;
  width: 100%;
`;

export const Menu = styled.menu`
  background-color: ${colors.white};
  color: ${colors.deepBlue};
  margin-top: 1rem;
  box-shadow: 2px 2px 10px rgba(55, 63, 104, 0.3505);
  height: max-content;
  width: 100%;
  border-radius: 10px;
  > li {
    padding: 0 24px;
    cursor: pointer;
    height: 47px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      color: ${colors.purple};
    }
    &:not(:last-child) {
      border-bottom: 1px solid ${colors.deepBlue};
    }
  }
`;

export const Suggestion = styled.div`
  
  background-color: ${colors.white};
  border-radius: 10px;
  max-width: 825px;
  padding: 32px 28px;
  display: grid;
  grid-template-columns: 40px auto 44px;
  gap: 40px;
   .main {
    display: flex;
    flex-direction: column;
    gap: 4px;
    > p {
      margin-bottom: 8px;
    }
  }
`;

export const Comments = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
`

export const Card = styled.div`
height:max-content;
background-color:${colors.white};
padding:32px;
border-radius:10px;
h3 {
  &:hover {
    cursor:pointer;
    color:${colors.lightBlue};

  }
}
.category {
  margin:1rem 0;
}
.bottom {
  display:flex;
  justify-content:space-between;
  button {
    flex-direction:row;
    width:fit-content;
    height:40px;
  }
}
`