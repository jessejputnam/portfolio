export interface FrameProps {
  position: string;
}

export interface TitleCardProps {
  theme: string;
}

export interface CardProps {
  side: string;
  data: CardData | null;
}

export interface CardData {
  title: string;
  description: string;
  stack?: string[];
  liveLink?: string | null;
  codeLink?: string | null;
}

export interface DesktopNavProps {
  getDetails: (idx: string) => void;
}
