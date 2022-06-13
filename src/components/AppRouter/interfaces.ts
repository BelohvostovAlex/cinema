import React from 'react';

import { Main } from '../../pages/Main';
import { MoviePage } from '../../pages/MoviePage';
import { NotFound } from '../../pages/NotFound/NotFound';
import { NothingFound } from '../../pages/NothingFound/NothingFound';
import { ReservePage } from '../../pages/ReservePage';
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
  ERROR = '/404',
  NOTHING_FOUND = '/nothingFound',
}

export const publicRoutes: IRoute[] = [
  { path: Pathes.MAIN, element: Main },
  { path: Pathes.MOVIE, element: MoviePage },
  { path: Pathes.RESERVE, element: ReservePage },
  { path: Pathes.USER, element: User },
  { path: Pathes.ERROR, element: NotFound },
  { path: Pathes.NOTHING_FOUND, element: NothingFound },
];
