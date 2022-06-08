import { palette } from "../../styles/theme/theme";

export const styles = {
  moviePageWrapper: {
    minHeight: '840px',
    width: '840px',
    background: palette.background.primary,
    padding: '32px 24px 0px' //at the bottom no padding??
  },
  moviePageHeader: {
    height: '280px',
    background: '#C4C4C4',
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative'
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
    justifyContent: 'space-between'
  },
  movieTitle: {
    width: '454px',
    height: '57px',
    background: 'rgba(43, 34, 67, 0.1)',
    padding: '7px 16px 8px 10px',
    color: palette.color.black,
    display: 'flex',
    alignItems: 'center',
    zIndex: 1
  },
  movieRating: {
    width: 'fit-content',
    maxWidth: '200px',
    height: '57px',
    padding: '11px 4px 12px 9px',
    background: 'rgba(43, 34, 67, 0.1)',
    alignSelf: 'flex-end',
    zIndex: 1
  },
  movieRatingTitle: {
    color: palette.color.black,
  },
  movieContent: {
    display: 'flex'
  },
  movieDescriptionWrapper: {
    minWidth: '390px',
    width: '390px',
    height: 'auto',
    marginTop: '15px'
  },
  movieDescriptionTitle: {
    marginBottom: '15px'
  },
  movieInfoBox: {
    marginTop: '27px',
    width: '364px',
    minHeight: '351px',
    padding: '47px 37px 57px 45px',
    background: palette.background.black,
    '& > h2': {
      marginBottom: '15px'
    }
  },
  moviePostersBox: {
    marginLeft: '19px',
    marginTop: '26px',
    height: '404px',
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
      marginRight: '27px', //в макете 24
    },
    marginBottom: '27px' //в макете 24
  }
}