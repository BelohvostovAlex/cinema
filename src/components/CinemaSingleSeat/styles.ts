import { mergeStyles } from '../../styles/helpers/mergeStyles';

interface getStylesProps {
  isChecked?: boolean;
  isReserved?: boolean;
}

export const getStyles = ({ isChecked, isReserved }: getStylesProps) => {
  const root = {
    seat: {
      width: '36px',
      height: '36px',
      background: '#C4C4C4',
      border: '3px solid #85FF91',
      '&:hover': {
        background: '#85FF91',
      },
    },
    seatChecked: {
      border: '3px solid #FBC60A',
      '&:hover': {
        background: '#FBC60A',
      },
    },
    seatReserved: {
      border: '3px solid #FF0000',
      '&:hover': {
        background: '#FF0000',
      },
    },
  };
  if (isChecked) {
    return mergeStyles(root.seat, root.seatChecked);
  }
  if (isReserved) {
    return mergeStyles(root.seat, root.seatReserved);
  }
  return root.seat;
};
