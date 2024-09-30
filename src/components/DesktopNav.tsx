import { NavProps } from "../types";

import { StyledNav } from "./styled/StyledNav";

export default function DesktopNav({ getDetails }: NavProps) {
  function chooseCard(e: any) {
    const idx = e.target.closest(".link").id;
    getDetails(idx);
  }

  return (
    <StyledNav>
      <div>
        <h3 className='projects'>Projects</h3>
        <h3>|</h3>
        <h3 id='0' onClick={chooseCard} className='link'>
          [About]
        </h3>
      </div>

      <ul>
        <li id='0' onClick={chooseCard} className='link'>
          <p>[About Me]</p>
        </li>

        <li id='1' onClick={chooseCard} className='link'>
          <p>[ TCG Portfolio Builder ]</p>
        </li>

        <li id='2' onClick={chooseCard} className='link'>
          <p>[ Nand2Tetris ]</p>
        </li>

        <li id='3' onClick={chooseCard} className='link'>
          <p>[ leWord ]</p>
        </li>

        <li id='4' onClick={chooseCard} className='link'>
          <p>[ Gameboy Snake ]</p>
        </li>

        <li id='5' onClick={chooseCard} className='link'>
          <p>[ Battleship ]</p>
        </li>

        <li id='6' onClick={chooseCard} className='link'>
          <p>[ Weather or Not ]</p>
        </li>

        <li id='7' onClick={chooseCard} className='link'>
          <p>[ Government Landing Page ]</p>
        </li>
      </ul>
    </StyledNav>
  );
}
