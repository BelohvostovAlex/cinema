import { palette } from '../../styles/theme/theme';

export const styles = {
  ticketWrapper: {
    width: '608px',
    height: '221px',
    padding: '24px 16px',
    background: palette.background.black,
    marginBottom: '16px',
    position: 'relative',
  },
  ticketInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '25px',
  },
  ticketTitle: {
    maxWidth: '400px',
  },
  ticketButton: {
    position: 'absolute',
    bottom: '24px',
    right: '16px',
  },
};
