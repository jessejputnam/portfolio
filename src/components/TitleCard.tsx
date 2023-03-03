import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

import styled from "styled-components";

const StyledTitle = styled.div`
  && h1 {
    margin-top: 10px;
  }

  && h2 {
    margin-top: -10px;
    margin-left: 20px;
    font-size: 1.8rem;
  }
`;

export default function TitleCard() {
  const theme = useContext(ThemeContext);

  return (
    <StyledTitle theme={theme}>
      <h1>Jesse Putnam</h1>
      <h2>Web Developer</h2>
    </StyledTitle>
  );
}
