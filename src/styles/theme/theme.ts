import {createTheme} from '@mui/material/styles'

export const palette = {
  color: {
    main: '#EEEAEA',
    primary: '#2B2243',
    white: '#FFF',
    black: '#000000',
  },
  background: {
    main: '#171515',
    primary: '#2B2243',
    white: '#FFF',
    black: '#000000',
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    h2: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '29.26px',
    },
    h3: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '17.07px',
    },
    h4: {
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: '12.19px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: palette.color.main,
          background: palette.background.main,
          maxWidth: 1440,
          margin: '0px auto',
          boxSizing: 'border-box',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          textTransform: 'unset',
          transition: 'unset',
        },
        containedPrimary: {
          background: palette.background.primary,
          color: palette.color.main,
          '&:hover': {
            background: palette.background.white,
            border: `3px solid ${palette.background.primary}`,
            color: palette.color.primary
          }
        },
        containedSecondary: {
          background: palette.background.black,
          color: palette.color.white,
          border: `3px solid ${palette.color.black}`,
          justifyContent: 'flex-start',
          padding: '17px 19px 14px 19px',
          lineHeight: '17px',
          '&:hover': {
            background: palette.background.black,
            border: `3px solid ${palette.color.white}`,
            color: palette.color.white
          }
        },
        containedSizeLarge: {
          width: '168px',
          height: '85px',
        },
        containedSizeMedium: {
          width: '140px',
          height: '49px',
        },
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: palette.color.main
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '888px'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          lineHeight: '17.07px',
          width: 'auto',
          minWidth: '80px',
          minHeight: '26px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          fontWeight: 400,
          textDecoration: 'none',
          color: palette.color.main,
          '&:hover': {
            textDecoration: 'underline',
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: palette.color.main,
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: 'none',
        },
        input: {
          padding: '25px 19px ',
          fontSize: '24px',
          lineHeight: '29px',
          fontWeight: 400,
          color: palette.color.black,
          '&::placeholder': {
            color: palette.color.black,
            opacity: 1
          }
        },
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 0,
          borderBottom: 'none',
        },
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: palette.color.white
        },
        page: {
          '&.Mui-selected': {
            background: palette.background.primary,
            border: `3px solid ${palette.background.primary}`,
            '&:hover': {
              border: `3px solid ${palette.background.primary}`,
              background: palette.background.white,
              color: palette.color.black
            }
          }
        }
      }
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          justifyContent: 'center',
          marginBottom: '20px'
        }
      }
    }
  }
})