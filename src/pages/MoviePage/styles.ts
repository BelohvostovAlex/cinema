import { palette } from '../../styles/theme/theme';

export const styles = {
  moviePageWrapper: {
    minHeight: '840px',
    width: '840px',
    background: palette.background.primary,
    padding: '32px 24px',
  },
  moviePageHeader: {
    height: '280px',
    background: '#C4C4C4',
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  movieMainPoster: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  moviePageHeaderTitle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  movieTitle: {
    width: '454px',
    minHeight: '57px',
    background: 'rgba(43, 34, 67, 0.1)',
    padding: '7px 16px 8px 10px',
    color: palette.color.black,
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
  },
  movieRating: {
    minWidth: '115px',
    maxWidth: '200px',
    padding: '11px 4px 12px 9px',
    background: 'rgba(43, 34, 67, 0.1)',
    alignSelf: 'flex-end',
    zIndex: 1,
  },
  movieRatingTitle: {
    color: palette.color.black,
  },
  movieContent: {
    display: 'flex',
    '&:last-of-type': {
      paddingBottom: '0px',
    },
  },
  movieDescriptionWrapper: {
    minWidth: '390px',
    width: '390px',
    height: 'auto',
    marginTop: '15px',
  },
  movieDescriptionTitle: {
    marginBottom: '15px',
  },
  movieInfoBox: {
    marginTop: '27px',
    width: '364px',
    minHeight: '500px',
    padding: '24px 37px 29px 32px',
    background: palette.background.black,
    '& > h2': {
      marginBottom: '30px',
      '&:last-of-type': {
        marginBottom: 0,
      },
    },
  },
  moviePostersBox: {
    marginLeft: '22px',
    marginTop: '26px',
    height: '505px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  moviePoster: {
    width: '178px',
    height: '226px',
    background: '#C4C4C4',
    backgoundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '&:nth-of-type(odd)': {
      marginRight: '24px',
    },
    marginBottom: '24px',
  },
};
