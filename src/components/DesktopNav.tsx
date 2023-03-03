import styled from "styled-components";
import { DesktopNavProps } from "../types";

const StyledNav = styled.ul`
  padding: 5px;
  min-width: 210px;
  width: 210px;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  && h3 {
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(
      0.25turn,
      var(--faded-blue),
      var(--purple),
      var(--faded-blue)
    );
    border-image-slice: 1;
    margin-bottom: 10px;
    padding-bottom: 2px;
  }

  && ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  && li {
    cursor: default;
    transition: letter-spacing 0.3s, margin-left 0.3s, color 0.3s;
  }

  && li:hover {
    letter-spacing: 0.15ch;
    margin-left: -10px;
    color: #9f328de3;
  }

  && p {
    line-height: 0.9;
  }
`;

export default function DesktopNav({ getDetails }: DesktopNavProps) {
  function chooseCard(e: any) {
    const idx = e.target.closest("li").id;
    getDetails(idx);
  }

  return (
    <StyledNav>
      <h3>Projects</h3>
      <ul>
        <li id='1' onClick={chooseCard}>
          <p>TCG Portfolio Builder</p>
        </li>
        <li id='2' onClick={chooseCard}>
          <p>Public Sector Landing Page</p>
        </li>
        <li id='3' onClick={chooseCard}>
          <p>Data Visualization</p>
        </li>
        <li id='4' onClick={chooseCard}>
          <p>Weather or Not</p>
        </li>
        <li id='5' onClick={chooseCard}>
          <p>Mock Storefront Inventory</p>
        </li>
        <li id='6' onClick={chooseCard}>
          <p>le Word</p>
        </li>
        <li id='7' onClick={chooseCard}>
          <p>Battleship</p>
        </li>
      </ul>
    </StyledNav>
  );
}
