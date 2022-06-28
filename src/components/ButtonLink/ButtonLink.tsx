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
  style,
  color = ButtonLinkColor.PRIMARY,
  onClick,
}) => {
  return (
    <Link to={path} data-testid="card-link">
      <Button variant={variant} color={color} sx={style} onClick={onClick}>
        {title}
      </Button>
    </Link>
  );
};
