import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

import { CardProps } from "../types";

import { StyledCard } from "./styled/StyledCard";

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
