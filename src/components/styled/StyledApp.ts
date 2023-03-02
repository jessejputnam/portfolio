import styled from "styled-components";

export const StyledApp = styled("div")`
  position: relative;
  background-color: ${(props) =>
    props.theme === "dark"
      ? "var(--background-dark)"
      : "var(--background-light)"};
  color: ${(props) =>
    props.theme === "dark" ? "var(--color-dark)" : "var(--color-light)"};
  height: 100%;
  width: 100%;
  padding: 25px;

  transition: background-color 0.3s, color 0.3s;
`;
