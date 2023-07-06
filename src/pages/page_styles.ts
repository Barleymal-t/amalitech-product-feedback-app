import { styled } from "styled-components";
import { colors } from "../colors";

/*
SuggestionsPage Styles
*/

export const Suggestions = styled.main`
  max-width: 110.625rem;
  width: 90%;
  margin: 94px auto;
  background-color: ${colors.lightGrey};
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 4fr;
  @media (max-width: 768px) {
    margin: 56px 39px;
    max-width: 689px;
    display: block;
  }
  @media (max-width: 375px) {
    display:block;
    margin: 0;
    width:100vw;
    overflow:hidden;
  }
  `;
  
  export const SuggestionsSection = styled.section`
  
  .suggestions {
    display: grid;
    gap: 2rem;
    @media (max-width: 375px) {
      width:90%;
      margin:auto;
    }
  }
`;



export const Headbar =styled.section`
  width:100%;
  max-width: 825px;
  color: white;
  background-color: ${colors.deepBlue};
  height: 72px;
  margin-bottom: 2rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.625rem;
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .count {
    display: flex;
    gap: 1rem;
    @media (max-width: 375px) {
      display:none;
    }

  }
  @media (max-width: 375px) {
    border-radius:0;
  }

`

export const CustomizationPane = styled.aside<{ $open?: boolean }>`
transition:all 0.3s linear;
  width: 255px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  span {
    &:hover {
      cursor: pointer;
      color: ${colors.lightBlue};
      text-decoration: underline;
    }
  }
  > * {
    width: 100%;
    height:178px;
    border-radius: 0.625rem;
    background: ${colors.white};
    padding: 1.5rem;
    @media (max-width: 768px) {
      // height: auto;
      margin-bottom: 2rem;
    }
  }

 
  > .categories {
    
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    // @media (max-width: 768px) {
    //   padding-right: 0;
    // }
  }
  > .roadmap {
    > .heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    > .content {
      .dot {
        height: 0.625rem;
        width: 0.625rem;
        border-radius: 50%;
        display: inline-block;
        margin-right: 5px;
      }
      .planned {
        background-color: ${colors.orange};
      }
      .in-progress {
        background-color: ${colors.purple};
      }
      .live {
        background-color: ${colors.aqua};
      }
      li {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
      }
    }
  }
  @media (max-width: 768px) {
    height: max-content;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.625rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 375px) {
    z-index:10;
    width:270px;
    height:100vh;
    display: block;
    margin-top:5.5rem;
    padding:1.5rem;
    position: absolute;
    top: 0;
    right:0;
    background-color:${colors.scorchedBlue};
    ${(props) =>
      props.$open ? "transform: translate(0);":"transform: translate(+100%);"}
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${colors.white};
  background: url(../assets/suggestions/desktop/background-header.png);
  height: 137px;
  @media (max-width: 768px) {
    height: auto;
    background: url(../assets/suggestions/tablet/background-header.png);
  }
  @media (max-width:375px) {
    display:none;
  }
`
export const MobileLabel = styled.div`
color:${colors.white};
display:none;
@media (max-width:375px) {
  width:100vw;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:1rem;
    background:url(../assets/suggestions/mobile/background-header.png);
  }
`



export const Status = styled.div`
  .dot {
    height: 0.625rem;
    width: 0.625rem;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
  }
  .planned {
    background-color: ${colors.orange};
  }
  .in-progress {
    background-color: ${colors.purple};
  }
  .live {
    background-color: ${colors.aqua};
  }
  li {
    text-transform: capitalize;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
  }
`;

export const EmptySuggestions = styled.section`
  background-color: ${colors.white};
  height: 70vh;
  width: 100%;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
`;

/*
Feedback Details
*/

export const FeedbackDetail = styled.main`
  background-color: ${colors.lightGrey};
  width: 730px;
  margin: 80px auto;
  display: grid;
  gap: 1.5rem;
`;

export const CommentsSection = styled.section`
  width: 100%;
  border-radius: 0.625rem;
  background: ${colors.white};
  padding: 34px 1.5rem;
  > h1 {
    font-size: 1.125rem;
  }
`;

export const Comment = styled.div`
  position: relative;
  b {
    color: ${colors.purple};
    font-size: 15px;
  }
  .main {
    display: grid;
    grid-template-columns: auto 90%;
    gap: 17px 2rem;
    .greyline {
      position: absolute;
      top: 100px;
      left: 17.5px;
      width: 1px;
      height: calc(100% - 250px);
      background-color: ${colors.scorchedBlue};
    }
    > img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  padding: 2rem 0;
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.scorchedBlue};
  }
  h3,
  span {
    font-size: 14px;
  }
`;

export const Reply = styled(Comment)`
  margin-left: 40px;
  border-bottom: 0 !important;
`;
export const AddComment = styled.form`
  background-color: ${colors.white};
  width: 100%;
  display: grid;
  gap: 1rem;
  padding: 2rem;
  border-radius: 0.625rem;
  textarea {
    background-color: ${colors.lightGrey};
    resize: none;
    // text-wrap:wrap;
    // max-width: 840px;
    border: 1px solid ${colors.deepBlue};
    border-radius: 0.625rem;
    padding: 1.5rem 1rem;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FeedbackTop = styled.div`
  display: flex;
  justify-content: space-between;
  b {
    color: ${colors.lightBlue};
    font-size: 13px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

/**
 *
 * New Feedback
 *
 */

export const NewFeedback = styled.main`
  position: relative;
  background: ${colors.white};
  width: 540px;
  margin: 92px auto;
  padding: 52px 42px;
  h1 {
    margin-bottom: 40px;
  }
  form {
    display: grid;
    gap: 1.5rem;
  }
  > img {
    position: absolute;
    top: 0;
    translate: 0 -50%;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    gap: 1rem;
  }
`;
export const InputSection = styled.div`
  display: grid;
  gap: 1rem;
  h3,
  p {
    font-size: 14px;
  }
`;

/**
 *
 * Roadmap
 *
 */

export const Roadmap = styled.main`
  width: 90%;
  max-width: 110.625rem;
  margin: 78px auto;
  .back > button {
    padding: 0;
    height: auto;
  }
  > .headbar {
    margin-bottom: 48px;
    height: 113px;
    border-radius: 0.625rem;
    padding: 27px 2rem;
    color: ${colors.white};
    background-color: ${colors.deepBlue};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    h2 {
      text-transform: capitalize;
    }
    .column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .planned > div {
      border-top: 6px solid ${colors.orange};
    }
    .in-progress > div {
      border-top: 6px solid ${colors.purple};
    }
    .live > div {
      border-top: 6px solid ${colors.aqua};
    }
  }
  @media (max-width: 768px) {
    margin: 56px 39px;
    max-width: 689px;
  }
`;
