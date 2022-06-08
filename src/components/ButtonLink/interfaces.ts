import { SxProps } from "@mui/material";

export enum ButtonLinkVariant {
  OUTLINED = 'outlined',
  CONTAINED = 'contained',
  TEXT = 'text',
}

export enum ButtonLinkColor {
  ERROR = 'error',
  INFO = 'info',
  INHERIT = 'inherit',
  PRIMARY = 'primary',
  WARNING = 'warning',
  SUCCESS = 'success',
  SECONDARY = 'secondary'

}

export interface ButtonLinkProps {
  title: string,
  className?: SxProps,
  variant?: ButtonLinkVariant,
  path: string,
  color?: ButtonLinkColor
}