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
  isLoaded?: boolean;
}

export interface StyledCardProps {
  side: string;
  currentSide: string;
  isLoaded?: boolean;
}

export interface CardData {
  id: number;
  title: string;
  description: string;
  stack?: string[];
  liveLink?: string | null;
  codeLink?: string | null;
}

export interface NavProps {
  getDetails: (idx: string) => void;
}

export interface MailFormProps {
  open: boolean;
  theme: string;
}
