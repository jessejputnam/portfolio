import { useContext } from "react";
import { Context } from "../contexts";

import { FrameProps } from "../types";
import { StyledFrame } from "./styled/StyledFrame";

export default function Frame({ position }: FrameProps) {
  const { theme } = useContext(Context);

  return <StyledFrame position={position} theme={theme}></StyledFrame>;
}
