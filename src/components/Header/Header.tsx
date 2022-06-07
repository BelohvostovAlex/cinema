import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Box, Typography, Link, Container } from '@mui/material';

import { styles } from './styles';
import { HeaderProps } from './interfaces';

export const Header: React.FC<HeaderProps> = ({
  title = 'Welcome to our cinema',
  subtitle = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, labore.',
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Box sx={styles.header}>
      <Container maxWidth={false}>
        <Box sx={styles.headerWrapper}>
          <Box>
            <Typography variant="h2" sx={styles.headerTitle}>
              {title}
            </Typography>
            <Typography variant="h3">{subtitle}</Typography>
          </Box>
          {pathname !== '/' && pathname !== '/404' && (
            <Link onClick={() => navigate(-1)} sx={styles.headerLink}>
              Go back
            </Link>
          )}
          {pathname === '/404' && (
            <Link href="/" sx={styles.headerLink}>
              Go to the main page
            </Link>
          )}
        </Box>
      </Container>
    </Box>
  );
};

//React memo?
