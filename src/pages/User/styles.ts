import { palette } from '../../styles/theme/theme';

export const styles = {
  userWrapper: {
    width: '840px',
    height: '840px',
    background: palette.background.primary,
    padding: '36px 118px 32px 111px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userTitle: {
    marginBottom: '44px',
    alignSelf: 'flex-start',
  },
  userSummaryBlock: {
    width: '608px',
    height: '221px',
    padding: '24px 16px',
    background: palette.background.black,
  },
  userSummaryBlockInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '14px',
  }
};
