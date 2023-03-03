import styled from "styled-components";

export const StyledTitle = styled.div`
  && h1 {
    margin-top: 10px;

    @media only screen and (max-width: 600px) {
      font-size: 1.9rem;
    }
  }

  && h2 {
    margin-top: -10px;
    margin-left: 20px;
    font-size: 1.8rem;

    @media only screen and (max-width: 600px) {
      font-size: 1.4rem;
    }
  }
`;
