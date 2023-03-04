import styled from "styled-components";

import { StyledCardProps } from "../../types";

export const StyledCard = styled.div<StyledCardProps>`
  transition-property: opacity, transform;
  transition-duration: 0s, 1s;
  transition-delay: 0.5s, 0s;
  transition-timing-function: linear, linear;
  opacity: ${(props) => (props.side === props.currentSide ? "1" : "0")};
  transform: ${(props) =>
    props.side === props.currentSide
      ? "rotate3d(0, 1, 0, 0deg)"
      : "rotate3d(0, 1, 0, -180deg)"};

  max-width: 800px;
  width: 60vw;
  display: flex;
  flex-direction: column;
  gap: 5px;

  position: absolute;

  && h1 {
    line-height: 0.75;
    margin-bottom: 10px;
    font-weight: bold;
  }

  && div {
    display: flex;
  }

  && .stack {
    gap: 10px;
    justify-content: end;
    font-variant: small-caps;
    border-top: solid 3px var(--faded-blue);
    padding-top: 5px;
    width: fit-content;
    align-self: flex-end;
  }

  && .stack > p {
    font-size: 1.3rem;
    color: var(--faded-blue);
    text-shadow: 0 0 1px
      ${(props) =>
        props.theme === "light"
          ? "var(--deep-purple)"
          : "var(--background-light)"};
  }

  && .links {
    gap: 100px;
    padding-left: 30px;
  }

  && .description {
    margin: 15px 0;
    font-size: 1.8rem;
    text-align: justify;
  }

  && a {
    color: ${(props) =>
      props.theme === "light" ? "var(--project-link)" : "var(--deep-purple)"};
    line-height: 0.5;
    font-size: 1.8rem;
    letter-spacing: 0.2ch;
    transition: 0.3s;
    text-decoration: none;
    font-weight: bold;
  }

  @media (hover: hover) {
    && a:hover {
      color: ${(props) =>
        props.theme === "dark" ? "var(--project-link)" : "var(--deep-purple)"};
    }
  }

  @media only screen and (max-width: 900px) {
    width: 50vw;

    && h1 {
      font-size: 2.3rem;
    }

    && .description {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    position: relative;
    align-items: center;

    && .links {
      padding-left: 0;
    }

    && h1 {
      font-size: 2rem;
      text-align: center;
    }

    && .description {
      font-size: 1.4rem;
    }
  }
`;
