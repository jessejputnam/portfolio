import styled from "styled-components";

import TitleCard from "./TitleCard";
import Nav from "./Nav";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-end;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Nav />
      <TitleCard />
    </StyledHeader>
  );
}
