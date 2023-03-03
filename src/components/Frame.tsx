import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

import { FrameProps } from "../types";
import { StyledFrame } from "./styled/StyledFrame";

export default function Frame({ position }: FrameProps) {
  const { theme } = useContext(ThemeContext);

  return <StyledFrame position={position} theme={theme}></StyledFrame>;
}
