import styled from "styled-components";

export const StyledAppWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  padding: 50px 25px;

  @media only screen and (max-width: 600px) {
    padding-top: 20px;
  }
`;
