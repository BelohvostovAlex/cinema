import { palette } from '../../styles/theme/theme';

export const styles = {
  reservePageWrapper: {
    minHeight: '840px',
    background: palette.background.primary,
    padding: '36px 118px 66px 111px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  reservePageTitle: {
    marginBottom: '32px',
    alignSelf: 'flex-start',
  },
  infoBlock: {
    width: '608px',
    minHeight: '320px',
    padding: '24px 16px 24px 12px',
    background: palette.background.black,
    position: 'relative',
  },
  infoBlockItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '21px',
    ':nth-of-type(1)': {
      marginTop: '25px',
    },
  },
  infoBlockButton: {
    position: 'absolute',
    bottom: '24px',
    right: '16px',
  },
};
