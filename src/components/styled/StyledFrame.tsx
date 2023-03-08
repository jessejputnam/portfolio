import styled from "styled-components";

import { FrameProps } from "../../types";

export const StyledFrame = styled.div<FrameProps>`
  border-left: ${(props) =>
    props.position === "left"
      ? `outset 3px var(${
          props.theme === "light" ? "--transparent" : "--background-light"
        })`
      : `outset 3px var(--transparent)`};

  border-top: ${(props) =>
    props.position === "left"
      ? `inset 3px var(${
          props.theme === "light" ? "--transparent" : "--background-light"
        })`
      : `outset 3px var(--transparent)`};

  border-right: ${(props) =>
    props.position === "right"
      ? `inset 3px var(--background-${
          props.theme === "dark" ? "light" : "dark"
        })`
      : `inset 3px var(--transparent)`};

  border-bottom: ${(props) =>
    props.position === "right"
      ? `outset 3px var(--background-${
          props.theme === "dark" ? "light" : "dark"
        })`
      : `outset 3px var(${
          props.theme === "dark" ? "--transparent" : "--background-dark"
        })`};

  height: 100px;
  width: 300px;

  position: absolute;
  top: ${(props) => (props.position === "left" ? "50px" : "")};
  bottom: ${(props) => (props.position === "left" ? "" : "10px")};
  left: ${(props) => (props.position === "left" ? "10px" : "")};
  right: ${(props) => (props.position === "left" ? "" : "10px")};

  transition: all 0.3s;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
