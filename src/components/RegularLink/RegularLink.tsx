import React from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';
import { RegularLinkProps } from './interfaces';

import { getStyles } from './styles';

export const RegularLink: React.FC<RegularLinkProps> = ({
  path,
  title,
  style,
}) => {
  const styles = getStyles({ style });

  return (
    <Link to={path}>
      <Typography variant="h2" sx={styles}>
        {title}
      </Typography>
    </Link>
  );
};
