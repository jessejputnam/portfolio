import styled from "styled-components";

export const StyledMobileNav = styled.div<{ open: boolean }>`
  .nav-select {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 5px;
    border-bottom: outset 3px var(--mud);
    cursor: pointer;
    background-color: ${(props) =>
      props.theme === "dark"
        ? "var(--background-dark-mobile)"
        : "var(--background-light-mobile)"};

    transition: filter 0.2s;
  }

  @media (hover: hover) {
    .nav-select:hover {
      filter: ${(props) =>
        props.theme === "light" ? "brightness(130%)" : "brightness(70%)"};
    }
  }

  .nav-select h3 {
    padding-bottom: 3px;
  }

  .nav-options {
    height: 0px;

    overflow-y: hidden;
    list-style: none;
    position: absolute;
    z-index: 11;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    padding-bottom: 0;
    padding-left: calc(50% - 90px);
    padding-top: ${(props) => (props.open ? "15px" : "0px")};

    background-color: ${(props) =>
      props.theme === "dark"
        ? "rgba(52, 49, 70, 0.908)"
        : "rgb(117, 127, 145, 0.908)"};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    transition: height 0.5s ease-in-out, padding 0.7s;
  }

  .nav-options.open {
    padding-bottom: 15px;
    height: 275px;
  }

  p {
    transition: filter 0.2s, letter-spacing 0.2s, margin 0.2s, color 0.2s;
    cursor: pointer;
  }

  @media (hover: hover) {
    p:hover {
      filter: brightness(130%);
      letter-spacing: 0.2ch;
      margin-left: -10px;
      color: ${(props) => (props.theme === "light" ? "black" : "white")};
    }
  }

  @media only screen and (min-width: 601px) {
    display: none;
  }
`;
