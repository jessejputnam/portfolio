import styled from "styled-components";

import { PropsWithoutRef, PropsWithRef, useContext } from "react";
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
  gap: 15px;

  && * {
    font-size: 2rem;
  }

  && a {
    color: ${(props) =>
      props.theme === "light"
        ? "var(--background-dark)"
        : "var(--background-light)"};

    transition: transform 0.3s;
  }

  && a.light {
    transform: rotate(180deg);
  }
`;

export default function () {
  const { theme, toggleTheme } = useContext(ThemeContext);

  function changeTheme() {
    toggleTheme();
  }

  return (
    <StyledNav theme={theme}>
      <a>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      </a>
      <a>
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
      <a>
        <FontAwesomeIcon icon={faBlog}></FontAwesomeIcon>
      </a>
      <a onClick={changeTheme}>
        <FontAwesomeIcon
          icon={faCircleHalfStroke}
          className={theme}
        ></FontAwesomeIcon>
      </a>
    </StyledNav>
  );
}
