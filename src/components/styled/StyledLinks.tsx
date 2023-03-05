import styled from "styled-components";

export const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
  margin-bottom: -12px;

  border-bottom: ${(props) => (props.theme === "dark" ? "out" : "in")}set 3px
    var(--background-light);

  @media only screen and (max-width: 600px) {
    border-bottom: ${(props) => (props.theme === "dark" ? "out" : "in")}set 3px
      ${(props) =>
        props.theme === "dark"
          ? "var(--background-light)"
          : "var(--background-dark)"};
  }

  && * {
    font-size: 2rem;
  }

  && a {
    position: relative;
    color: ${(props) =>
      props.theme === "light"
        ? "var(--background-dark)"
        : "var(--background-light)"};

    transition: transform 0.3s, color 0.1s;
    cursor: pointer;
  }

  && a:after {
    content: attr(data-tooltip);
    font-size: 1rem;
    font-weight: 600;
    position: absolute;
    bottom: 130%;
    left: -70%;
    background: inherit;
    padding: 5px 15px;
    color: ${(props) =>
      props.theme === "dark" ? "var(--pink)" : "var(--mud)"};
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    white-space: nowrap;
    opacity: 0;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
  }

  @media (hover: hover) {
    && a:hover:after {
      bottom: 100%;
    }
    && a:hover:after,
    a:hover:before {
      opacity: 1;
    }

    && a:hover {
      color: ${(props) =>
        props.theme === "light"
          ? "var(--link-hover-light)"
          : "var(--link-hover-dark)"};
    }
  }

  && a.toggle > * {
    transition: transform 0.3s;
  }

  @media (hover: hover) {
    && a.toggle > *:hover {
      transform: rotateZ(180deg);
    }
  }

  && .contact {
    z-index: 20;
  }
`;
