import { palette } from '../../styles/theme/theme';

export const styles = {
  ticketWrapper: {
    width: '608px',
    minHeight: '221px',
    padding: '24px 16px',
    background: palette.background.black,
    marginBottom: '16px',
    position: 'relative',
  },
  ticketInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '32px',
  },
  ticketTitle: {
    maxWidth: '400px',
  },
  ticketButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};
