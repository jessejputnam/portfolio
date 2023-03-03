import TitleCard from "./TitleCard";
import Nav from "./Links";

import { StyledHeader } from "./styled/StyledHeader";

export default function Header() {
  return (
    <StyledHeader>
      <Nav />
      <TitleCard />
    </StyledHeader>
  );
}
