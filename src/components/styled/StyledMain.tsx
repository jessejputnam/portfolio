import styled from "styled-components";

export const StyledMain = styled.main`
  position: relative;
  padding: 100px 20px 10px;
  gap: 50px;
  display: flex;
  justify-content: space-between;

  && > div {
    position: relative;
  }

  @media only screen and (max-width: 600px) {
    padding: 20px 20px 10px;
  }
`;
