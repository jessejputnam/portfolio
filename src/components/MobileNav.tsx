import { useContext, useState } from "react";

import { StyledMobileNav } from "./styled/StyledMobileNav";
import { Context } from "../contexts";

import { NavProps } from "../types";

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
    <StyledMobileNav theme={theme} open={open}>
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
