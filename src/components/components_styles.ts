import { styled } from "styled-components";
import { colors } from "../colors";

export const Button = styled.button.attrs((props) => ({
  color: colors[props.color as keyof typeof colors],
  hoverColor: colors[`hover${props.color}` as keyof typeof colors],
}))`
  background-color: ${({ color }) => color || "transparent"};
  color: ${({ color }) => (color ? "white" : colors.lightBlue)};
  min-width: 158px;
  height: 44px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Vote = styled.button`
  width: 40px;
  height: 53px;
  color: ${colors.deepBlue};
  background-color: ${colors.scorchedBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: ${colors.hoverscorchedBlue};
  }
  &:active {
    color: ${colors.white};
    background-color: ${colors.lightBlue};
  }
`;

export const Cat = styled(Vote)`
  min-width: 48px;
  height: 30px;
`;

export const Text = styled.input<{ error?: boolean }>`
  height: 48px;
  width: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 24px;
  outline: none;
  color: ${colors.deepBlue};
  border-radius: 5px;
  border: 1px solid ${(props) => (props.error ? colors.red : "transparent")};
  background: ${colors.scorchedBlue};
  &:active,
  &:focus {
    border: 1px solid
      ${(props) => (props.error ? colors.red : colors.lightBlue)};
  }
`;

export const Drop = styled.div`
  height: 48px;
  width: 255px;
  > div {
    cursor: pointer;
    background: ${colors.scorchedBlue};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    border-radius: 5px;
  }
`;

export const Menu = styled.menu`
margin-top:1rem;
box-shadow: 2px 2px 10px rgba(55, 63, 104, 0.3505);
height: max-content;
width: 255px;
border-radius: 10px;
> li {
  padding: 0 24px;
  cursor: pointer;
  height: 47px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content:space-between;
  &:hover {
    color:${colors.purple};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.deepBlue};
  }
}
`
