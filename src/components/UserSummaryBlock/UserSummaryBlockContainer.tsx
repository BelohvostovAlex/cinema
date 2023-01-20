import { FunctionComponent } from "react";

import { UserSummaryBlock } from "./UserSummaryBlock";

import { useAppSelector } from "../../hooks/useAppSelector";

export const UserSummaryBlockContainer: FunctionComponent = () => {
  const { bookedMovies } = useAppSelector((state) => state.seats);

  const reservedMovies = bookedMovies.filter(
    (item) => item.reserved.length > 0
  );

  return <UserSummaryBlock movies={reservedMovies} />;
};
