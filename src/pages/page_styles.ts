import { styled } from "styled-components";
import { colors } from "../colors";

export const Suggestions = styled.main`
  padding: 95px 165px;
  background-color: ${colors.lightGrey};
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 4fr;
`;

export const SuggestionsSection = styled.section`
  > .headbar {
    max-width: 825px;
    color: white;
    background-color: ${colors.deepBlue};
    height: 72px;
    margin-bottom: 2rem;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    > .left {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
  }
  > .suggestions {
    display: grid;
    gap: 2rem;
  }
`;

// export const Par = styled.p`
//   color: white;
// `;

export const CustomizationPane = styled.aside`
min-width:255px;
display:flex;
flex-direction:column;
gap:24px;
>* {
  width:100%;
  border-radius:10px;
  background:${colors.white};
  padding:24px;
}
> .label {
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  color:${colors.white};
  background: url('../assets/suggestions/desktop/background-header.png');
  height:137px;
}
> .categories {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
> .roadmap {
  > .heading {
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  >.content {
    > li {
      
      display:flex;
      justify-content:space-between;
    }
  }
}
`;
