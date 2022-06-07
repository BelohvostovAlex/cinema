import { Button, Link } from '@mui/material';
import React from 'react';
import {
  ButtonLinkColor,
  ButtonLinkProps,
  ButtonLinkVariant,
} from './interfaces';
import { getStyles } from './styles';

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  title,
  href,
  variant = ButtonLinkVariant.CONTAINED,
  className,
  color = ButtonLinkColor.PRIMARY,
}) => {
  const styles = getStyles(className);
  return (
    <Link href={href} sx={styles}>
      <Button variant={variant} color={color}>
        {title}
      </Button>
    </Link>
  );
};
