import { palette } from '../../styles/theme/theme';

export const styles = {
  header: {
    width: '1440px',
    height: '160px',
    background: palette.background.primary,
    padding: '42px 0px',
    marginBottom: '24px',
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerTitle: {
    marginBottom: '30px',
  },
  headerLink: {
    paddingTop: '5px',
    cursor: 'pointer',
  },
};
