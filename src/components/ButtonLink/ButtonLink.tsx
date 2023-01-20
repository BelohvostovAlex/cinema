import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import {
  ButtonLinkColor,
  ButtonLinkProps,
  ButtonLinkVariant,
} from "./interfaces";

export const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  title,
  path,
  variant = ButtonLinkVariant.CONTAINED,
  style,
  color = ButtonLinkColor.PRIMARY,
  onClick,
  disabled,
}) => {
  return (
    <Link to={path} data-testid="card-link">
      <Button
        variant={variant}
        color={color}
        sx={style}
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </Button>
    </Link>
  );
};
