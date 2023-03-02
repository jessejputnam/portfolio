import { FrameProps } from "../types";
import styled from "styled-components";

const StyledFrame = styled.div<FrameProps>`
  border-left: ${(props) =>
    props.position === "left" ? "solid 3px black" : "none"};
  border-top: ${(props) =>
    props.position === "left" ? "solid 3px black" : "none"};
  border-right: ${(props) =>
    props.position === "right" ? "solid 3px black" : "none"};
  border-bottom: ${(props) =>
    props.position === "right" ? "solid 3px black" : "none"};

  height: 100px;
  width: 300px;
  position: absolute;
  top: ${(props) => (props.position === "left" ? "30px" : "")};
  bottom: ${(props) => (props.position === "left" ? "" : "30px")};
  left: ${(props) => (props.position === "left" ? "10px" : "")};
  right: ${(props) => (props.position === "left" ? "" : "10px")};
`;

export function Frame({ position }: FrameProps) {
  return <StyledFrame position={position}></StyledFrame>;
}
