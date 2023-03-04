import styled from "styled-components";

export const StyledNav = styled.ul`
  padding: 5px;
  min-width: 210px;
  width: 210px;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  && div {
    display: flex;
    justify-content: center;
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
    padding-bottom: 7px;
  }

  && h3 {
    font-size: 1.9rem;
  }

  && h3.projects {
    font-weight: 600;
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

  && .link {
    cursor: pointer;
  }

  @media (hover: hover) {
    && li:hover {
      margin-left: -10px;
      color: #9f328de3;
    }

    .link:hover {
      color: #9f328de3;
    }
  }

  && p {
    line-height: 0.9;
    font-size: 1.4rem;
  }
`;
