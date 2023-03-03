import styled from "styled-components";

export const StyledApp = styled("div")`
  background-color: ${(props) =>
    props.theme === "dark"
      ? "var(--background-dark)"
      : "var(--background-light)"};
  color: ${(props) =>
    props.theme === "dark" ? "var(--color-dark)" : "var(--color-light)"};

  height: 100%;
  width: 100%;

  transition: background-color 0.3s, color 0.3s;
`;
