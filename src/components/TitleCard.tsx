import { useContext } from "react";
import { Context } from "../contexts";

import { StyledTitle } from "./styled/StyledTitle";

export default function TitleCard() {
  const { theme } = useContext(Context);

  return (
    <StyledTitle theme={theme}>
      <h1>Jesse Putnam</h1>
      <h2>Web Developer</h2>
    </StyledTitle>
  );
}
