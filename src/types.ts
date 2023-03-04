import React from "react";

export interface FrameProps {
  position: string;
}

export interface TitleCardProps {
  getIdx: (idx: string) => void;
}

export interface CardProps {
  side: string;
  data: CardData | null;
  currentSide: string;
}

export interface StyledCardProps {
  side: string;
  currentSide: string;
}

export interface CardData {
  id: number;
  title: string;
  description: string;
  stack?: string[];
  liveLink?: string | null;
  codeLink?: string | null;
}

export interface DesktopNavProps {
  getDetails: (idx: string) => void;
}

export type CardDataState = [
  CardData | null,
  React.Dispatch<React.SetStateAction<CardData | null>>
];
