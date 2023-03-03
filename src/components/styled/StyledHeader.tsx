import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-end;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
