import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

import { CardProps } from "../types";

import styled from "styled-components";

const StyledCard = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  && div {
    display: flex;
  }

  && .stack {
    gap: 10px;
    justify-content: end;
    font-variant: small-caps;
  }

  && .stack > p {
    font-size: 1.3rem;
    color: var(--faded-blue);
    text-shadow: 0 0 1px
      ${(props) =>
        props.theme === "light" ? "var(--purple)" : "var(--background-light)"};
  }

  && .links {
    gap: 100px;
    padding-left: 30px;
  }

  && .description {
    margin: 15px 0;
  }

  && a {
    color: ${(props) =>
      props.theme === "light" ? "var(--project-link)" : "var(--purple)"};
    line-height: 0.5;
    font-size: 1.8rem;
    letter-spacing: 0.2ch;
  }
`;

export default function InfoCard({ side, data }: CardProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledCard theme={theme}>
      <h1>{data ? data.title : null}</h1>

      {!data?.liveLink ? null : (
        <div className='links'>
          <p>
            <a href={data.codeLink as string} target='_blank'>
              Code
            </a>
          </p>

          <p>
            <a href={data.liveLink as string} target='_blank'>
              Link
            </a>
          </p>
        </div>
      )}

      <p className='description'>{data ? data.description : null}</p>

      {!data?.stack ? null : (
        <div className='stack'>
          {data.stack.map((tech) => (
            <p key={tech}>{tech}</p>
          ))}
        </div>
      )}
    </StyledCard>
  );
}
