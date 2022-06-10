import React from 'react';
import { Main } from '../../pages/Main';
import { MoviePageContainer } from '../../pages/MoviePage';
import { NotFound } from '../../pages/NotFound/NotFound';
import { ReservePageContainer } from '../../pages/ReservePage';
import { User } from '../../pages/User';

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum Pathes {
  MAIN = '/',
  MOVIE = '/movie/:id',
  RESERVE = '/reserve/:id',
  USER = '/user',
  ERROR = '/404'
}

export const publicRoutes: IRoute[] = [
  { path: Pathes.MAIN, element: Main },
  { path: Pathes.MOVIE, element: MoviePageContainer },
  { path: Pathes.RESERVE, element: ReservePageContainer },
  { path: Pathes.USER, element: User },
  { path: Pathes.ERROR, element: NotFound }
];
