import styled from "styled-components";
import { DesktopNavProps } from "../types";

const StyledNav = styled.ul`
  padding: 5px;
  min-width: 210px;
  width: 210px;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  && div {
    display: flex;
    gap: 15px;
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

  && li,
  .link {
    cursor: default;
    transition: letter-spacing 0.3s, margin-left 0.3s, color 0.3s;
  }

  @media (hover: hover) {
    && li:hover {
      letter-spacing: 0.15ch;
      margin-left: -10px;
      color: #9f328de3;
    }

    .link:hover {
      color: #9f328de3;
    }
  }

  && p {
    line-height: 0.9;
  }
`;

export default function DesktopNav({ getDetails }: DesktopNavProps) {
  function chooseCard(e: any) {
    const idx = e.target.closest(".link").id;
    getDetails(idx);
  }

  return (
    <StyledNav>
      <div>
        <h3>Projects</h3>
        <h3>|</h3>
        <h3 id='0' onClick={chooseCard} className='link'>
          About
        </h3>
      </div>
      <ul>
        <li id='1' onClick={chooseCard} className='link'>
          <p>TCG Portfolio Builder</p>
        </li>
        <li id='2' onClick={chooseCard} className='link'>
          <p>Public Sector Landing Page</p>
        </li>
        <li id='3' onClick={chooseCard} className='link'>
          <p>Data Visualization</p>
        </li>
        <li id='4' onClick={chooseCard} className='link'>
          <p>Weather or Not</p>
        </li>
        <li id='5' onClick={chooseCard} className='link'>
          <p>Mock Storefront Inventory</p>
        </li>
        <li id='6' onClick={chooseCard} className='link'>
          <p>le Word</p>
        </li>
        <li id='7' onClick={chooseCard} className='link'>
          <p>Battleship</p>
        </li>
      </ul>
    </StyledNav>
  );
}
