import styled from "styled-components";

import { FrameProps } from "../../types";

export const StyledFrame = styled.div<FrameProps>`
  border-left: ${(props) =>
    props.position === "left"
      ? `outset 3px var(--background-light)`
      : `outset 3px var(--background-${
          props.theme === "dark" ? "dark" : "light"
        })`};

  border-top: ${(props) =>
    props.position === "left"
      ? `${
          props.theme === "light" ? "out" : "in"
        }set 3px var(--background-light)`
      : `outset 3px var(--background-${
          props.theme === "dark" ? "dark" : "light"
        })`};

  border-right: ${(props) =>
    props.position === "right"
      ? `inset 3px var(--background-${
          props.theme === "dark" ? "light" : "dark"
        })`
      : `inset 3px var(--background-dark)`};

  border-bottom: ${(props) =>
    props.position === "right"
      ? `outset 3px var(--background-${
          props.theme === "dark" ? "light" : "dark"
        })`
      : `${
          props.theme === "light" ? "out" : "in"
        }set 3px var(--background-dark)`};

  height: 100px;
  width: 300px;

  position: absolute;
  top: ${(props) => (props.position === "left" ? "30px" : "")};
  bottom: ${(props) => (props.position === "left" ? "" : "30px")};
  left: ${(props) => (props.position === "left" ? "10px" : "")};
  right: ${(props) => (props.position === "left" ? "" : "10px")};

  transition: all 0.3s;
`;
