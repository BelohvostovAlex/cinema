import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import {
  ButtonLinkColor,
  ButtonLinkProps,
  ButtonLinkVariant,
} from './interfaces';

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  title,
  path,
  variant = ButtonLinkVariant.CONTAINED,
  className,
  color = ButtonLinkColor.PRIMARY,
}) => {
  return (
    <Link to={path}>
      <Button variant={variant} color={color} sx={className}>
        {title}
      </Button>
    </Link>
  );
};
