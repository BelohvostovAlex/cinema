import React from 'react';

import { Typography } from '@mui/material';
import { NotFoundBlockProps } from './interfaces';

export const NotFoundBlock: React.FC<NotFoundBlockProps> = ({
  title,
  subtitle,
}) => {
  return (
    <>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h2">{subtitle}</Typography>
    </>
  );
};
