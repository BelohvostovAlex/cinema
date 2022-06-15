import { SxProps } from '@mui/material';
import { mergeStyles } from '../../styles/helpers/mergeStyles';

interface getStylesProps {
  style?: SxProps;
}

export const getStyles = ({ style }: getStylesProps) => {
  const root = {
    link: {
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  };
  if (style) {
    return mergeStyles(style, root.link);
  }
  return root.link;
};
