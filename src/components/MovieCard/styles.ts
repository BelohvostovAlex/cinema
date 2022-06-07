import { palette } from '../../styles/theme/theme';

export const styles = {
  movieCard: {
    width: '840px',
    height: '274px',
    background: palette.background.primary,
    padding: '24px',
    marginBottom: '32px',
    borderRadius: '5px',
    display: 'flex',
    position: 'relative',
  },
  movieCardImg: {
    minWidth: '178px',
    width: '178px',
    height: '226px',
    background: '#C4C4C4',
    backgoundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  movieCardContentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  movieCardContent: {
    marginLeft: '28px',
    paddingTop: '5px',
  },
  movieCardTitleLink: {
    marginBottom: '25px',
  },
  movieCardDescription: {
    marginBottom: '20px',
  },
  movieCardActions: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px',
  },
  movieCardTagsWrapper: {
    display: 'flex',
    // ml: '10px',
    marginBottom: '30px',
  },
  movieCardTag: {
    minWidth: '34px',
    height: '25px',
    background: palette.background.black,
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '14px',
    '&:nth-of-type(3)': {
      marginRight: '0px',
    },
  },
  movieCardAdditionalInfo: {
    width: '70px',
    alignSelf: 'flex-end',
  },
  movieCardYear: {
    marginBottom: '22px',
  },
  movieCardLinkButton: {
    position: 'absolute',
    bottom: '24px',
    right: '24px',
  },
};
