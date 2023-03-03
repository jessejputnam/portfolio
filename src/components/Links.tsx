import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

import { StyledLinks } from "./styled/StyledLinks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faBlog,
  faCircleHalfStroke
} from "@fortawesome/free-solid-svg-icons";

export default function () {
  const { theme, toggleTheme } = useContext(ThemeContext);

  function changeTheme() {
    toggleTheme();
  }

  return (
    <StyledLinks theme={theme}>
      <a
        data-tooltip='GitHub'
        className='link'
        href='https://github.com/jessejputnam'
        target='_blank'
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a data-tooltip='Contact' className='link' target='_blank'>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      </a>
      <a
        data-tooltip='LinkedIn'
        className='link'
        href='https://www.linkedin.com/in/jessejputnam/'
        target='_blank'
      >
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
      <a
        data-tooltip='Blog'
        className='link'
        href='https://sisypheaninsights.com/'
        target='_blank'
      >
        <FontAwesomeIcon icon={faBlog}></FontAwesomeIcon>
      </a>
      <a data-tooltip='Theme' className='toggle' onClick={changeTheme}>
        <FontAwesomeIcon icon={faCircleHalfStroke}></FontAwesomeIcon>
      </a>
    </StyledLinks>
  );
}
