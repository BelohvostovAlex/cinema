export interface SearchProps {
  value: string,
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  getMovies: () => void
}

export interface SearchContainerProps {
  page: number,
  filterHandler: (value: string) => void
}