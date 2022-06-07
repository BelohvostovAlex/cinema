import { palette } from '../../styles/theme/theme';

export const getStyles = () => ({
  root: {
    ticketWrapper: {
      width: '608px',
      height: '221px',
      padding: '24px 16px',
      background: palette.background.black,
      marginBottom: '16px',
      position: 'relative'
    },
    ticketInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '25px',
    },
    ticketButton: {
      position: 'absolute',
      bottom: '24px',
      right: '16px',
    },
  },
});
