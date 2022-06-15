import React from 'react';

import { Container } from '@mui/material';
import { AppRouter } from './components/AppRouter/AppRouter';
import { Header } from './components/Header';

import './index.css';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth={false}>
        <AppRouter />
      </Container>
    </>
  );
};
