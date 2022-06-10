import React from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { UserSummaryBlock } from './UserSummaryBlock';

export const UserSummaryBlockContainer: React.FC = () => {
  const { bookedMovies } = useAppSelector((state) => state.seats);

  const reservedMovies = bookedMovies.filter(
    (item) => item.reserved.length > 0
  );

  return <UserSummaryBlock movies={reservedMovies} />;
};
