import { SxProps } from '@mui/material';

export const mergeStyles = (...styles: SxProps[]) => {
  return styles.reduce((acc, curr) => ({ ...acc, ...curr }), {});
};
