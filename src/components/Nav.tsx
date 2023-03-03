import styled from "styled-components";

import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faBlog,
  faCircleHalfStroke
} from "@fortawesome/free-solid-svg-icons";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
  margin-bottom: -15px;

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
    color: ${(props) =>
      props.theme === "light"
        ? "var(--background-dark)"
        : "var(--background-light)"};

    transition: transform 0.3s, color 0.1s;
    cursor: default;
  }

  && a:hover {
    color: ${(props) =>
      props.theme === "light"
        ? "var(--link-hover-light)"
        : "var(--link-hover-dark)"};
  }

  && a.toggle:hover {
    transform: rotateZ(180deg);
  }
`;

export default function () {
  const { theme, toggleTheme } = useContext(ThemeContext);

  function changeTheme() {
    toggleTheme();
  }

  return (
    <StyledNav theme={theme}>
      <a
        className='link'
        href='https://github.com/jessejputnam'
        target='_blank'
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a className='link' target='_blank'>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      </a>
      <a
        className='link'
        href='https://www.linkedin.com/in/jessejputnam/'
        target='_blank'
      >
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
      <a className='link' href='https://sisypheaninsights.com/' target='_blank'>
        <FontAwesomeIcon icon={faBlog}></FontAwesomeIcon>
      </a>
      <a className='toggle' onClick={changeTheme}>
        <FontAwesomeIcon icon={faCircleHalfStroke}></FontAwesomeIcon>
      </a>
    </StyledNav>
  );
}
