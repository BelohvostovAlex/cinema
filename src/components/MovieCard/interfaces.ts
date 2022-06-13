export interface MovieCardContainerProps {
  id: string;
}

export interface MovieCardProps {
  id: string;
  title: string;
  actors: string;
  runtime: string;
  genre: string[];
  plot: string;
  poster: string;
  year: string;
}