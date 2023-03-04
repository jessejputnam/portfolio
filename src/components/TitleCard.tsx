import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { TitleCardProps } from "../types";

import { StyledTitle } from "./styled/StyledTitle";

export default function TitleCard() {
  const theme = useContext(ThemeContext);

  return (
    <StyledTitle theme={theme}>
      <h1>Jesse Putnam</h1>
      <h2>Web Developer</h2>
    </StyledTitle>
  );
}
