import { styled } from "styled-components";
import { colors } from "../colors";
import { motion } from "framer-motion";

export const Button = styled.button.attrs((props) => ({
  color: colors[props.color as keyof typeof colors],
  hoverColor: colors[`hover${props.color}` as keyof typeof colors],
}))`
  background-color: ${({ color }) => color || "transparent"};
  color: ${({ color }) => (color ? "white" : colors.midGrey)};
  padding: 0.75rem 1.5rem;
  height: 44px;
  border-radius: 0.625rem;
  border: none;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  gap: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: ${({ color, hoverColor }) =>
      color ? hoverColor : "transparent"};
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
    width: 100%;
    max-width: 320px;
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
  border-radius: 0.625rem;
  border: none;
  text-transform: capitalize;
  padding: 6px 1rem;
  height: 30px;
  width: max-content;
  color: ${colors.lightBlue};
  cursor: pointer;
`;

export const CatButton = styled(Cat)<{ $active?: boolean }>`
  &:hover {
    background-color: ${colors.hoverscorchedBlue};
    transform: scale(1.1);
  }
  &:active {
    color: ${colors.white};
    background-color: ${colors.lightBlue};
  }
  ${(props) =>
    props.$active &&
    `
    &:focus,&:active,&:hover {
      color: ${colors.white};
      background-color: ${colors.lightBlue};
    }
    color: ${colors.white};
    background-color: ${colors.lightBlue};
    
      `}
`;

export const Vote = styled(CatButton)<{ $active?: boolean }>`
  &:first-child {
    @media (max-width: 768px) {
      display: none;
    }
  }
  width: 40px;
  height: 53px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  ${(props) =>
    props.$active &&
    `
      > svg path {
        stroke: ${colors.white};
      }
    `}
`;

export const Text = styled.input<{ error?: boolean }>`
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.error ? colors.red : "transparent")};
  background: ${colors.scorchedBlue};
  &:hover {
    cursor: pointer;
  }
  &:active,
  &:focus {
    border: 1px solid
      ${(props) => (props.error ? colors.red : colors.lightBlue)};
  }
`;

export const TextArea = styled.textarea<{ error?: boolean }>`
  resize: none;
  height: 96px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  padding: 1.5rem;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.error ? colors.red : "transparent")};
  background: ${colors.scorchedBlue};
  &:hover {
    cursor: pointer;
  }
  &:active,
  &:focus {
    border: 1px solid
      ${(props) => (props.error ? colors.red : colors.lightBlue)};
  }
`;

export const Drop = styled.div`
  height: 72px;
  position: relative;
  text-transform: capitalize;
  > div {
    cursor: pointer;
    background: transparent;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    border-radius: 5px;
    @media (max-width: 768px) {
      padding: 0;
    }
  }
`;
export const Select = styled(Drop)`
  background-color: ${colors.scorchedBlue};
  height: 48px;
  .heading {
    padding: 0 1.5rem;
  }
  input {
    outline: none;
    text-transform: capitalize;
    background: none;
    border: none;
    width: 100%;
    height: 48px;
  }
  border-radius: 0.625rem;
`;

export const Menu = styled.menu`
  z-index: 10;
  background-color: ${colors.white};
  color: ${colors.deepBlue};
  position: absolute;
  top: 100%;
  margin-top: 1rem;
  box-shadow: 2px 2px 10px rgba(55, 63, 104, 0.3505);
  height: max-content;
  width: 100%;
  border-radius: 0.625rem;
  > li {
    padding: 0 1.5rem;
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

export const Suggestion = styled(motion.div)`
  .bottom {
    display: none;
  }

  background-color: ${colors.white};
  border-radius: 0.625rem;
  max-width: 825px;
  padding: 2rem 1.75rem;
  display: grid;
  grid-template-columns: 40px auto 44px;
  gap: 40px;
  .main {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 4px;
    h3:hover {
      cursor: pointer;
      color: ${colors.lightBlue};
    }
    > p {
      margin-bottom: 8px;
    }
  }
  @media (max-width: 768px) {
    .bottom {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      button {
        flex-direction: row;
      }
    }
    display: flex;
    flex-direction: column;
  }
`;

export const Comments = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.188rem;
  letter-spacing: -0.33px;
`;
export const H2 = styled.h2`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 29px;
  letter-spacing: -0.25px;
`;

export const H3 = styled.h3`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 26px;
  letter-spacing: -0.25px;
`;

export const H4 = styled.h4`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.25rem;
  letter-spacing: -0.2px;
`;

export const P1 = styled.p`
  font-size: 16px;
  line-height: 23px;
`;
export const P2 = styled.p`
  font-size: 15px;
  line-height: 22px;
`;
export const P3 = styled.p`
  font-size: 13px;
  line-height: 19px;
  font-weight: semibold;
`;

export const Card = styled.div`
  height: max-content;
  background-color: ${colors.white};
  padding: 2rem;
  border-radius: 0.625rem;
  .category {
    margin: 1rem 0;
  }
  h3:hover {
    cursor: pointer;
    color: ${colors.lightBlue};
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  button {
    flex-direction: row;
    width: fit-content;
    height: 40px;
  }
`;

export const Mobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Error = styled(P3)`
  margin-top: -10px;
  margin-left: 10px;
  height: 2px;
  color: ${colors.red};
`;

/**
 * Modal
 */

export const Backdrop = styled(motion.div)`
  z-index: 10;
  position: absolute;
  height: 100vh;
  overflow: clip;
  width: 100vw;
  top: 0;
  left: 0;
  background: #000000e1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
