import { useContext, useState } from "react";

import styled from "styled-components";
import { Context } from "../contexts";

import { NavProps } from "../types";

const StyledMobileNav = styled.div`
  .nav-select {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 5px;
    border-bottom: outset 3px var(--mud);
    cursor: pointer;
    /* background-color: var(--background-light-mobile); */
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
    height: 0;

    overflow-y: hidden;
    list-style: none;
    position: absolute;
    z-index: 11;
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 100%;
    padding-bottom: 0;
    padding-left: calc(50% - 90px);
    box-shadow: 0 0 3px 0 var(--text-shadow-dark);

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
    height: 230px;
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

export default function MobileNav({ getDetails }: NavProps) {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(Context);

  function toggleNav() {
    setOpen(!open);
  }

  function chooseCard(e: any) {
    const idx = e.target.closest(".link").id;
    getDetails(idx);
    setOpen(false);
  }

  return (
    <StyledMobileNav theme={theme}>
      <div className='nav-select' onClick={toggleNav}>
        <h3 className='projects'>Projects</h3>
      </div>

      <ul className={`nav-options ${open ? "open" : ""}`}>
        <li id='0' onClick={chooseCard} className='link'>
          <p>[About Me]</p>
        </li>

        <li id='1' onClick={chooseCard} className='link'>
          <p>[ TCG Portfolio Builder ]</p>
        </li>

        <li id='2' onClick={chooseCard} className='link'>
          <p>[ Gov. Landing Page ]</p>
        </li>

        <li id='3' onClick={chooseCard} className='link'>
          <p>[ Data Visualization ]</p>
        </li>

        <li id='4' onClick={chooseCard} className='link'>
          <p>[ Weather or Not ]</p>
        </li>

        <li id='5' onClick={chooseCard} className='link'>
          <p>[ Storefront Inventory ]</p>
        </li>

        <li id='6' onClick={chooseCard} className='link'>
          <p>[ le Word ]</p>
        </li>

        <li id='7' onClick={chooseCard} className='link'>
          <p>[ Battleship ]</p>
        </li>
      </ul>
    </StyledMobileNav>
  );
}
