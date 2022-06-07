import { SxProps } from "@mui/material"
import { mergeStyles } from "../../styles/helpers/mergeStyles"

export const getStyles = (props?: SxProps) => {
  const root = {
    link: {
      height: '49px',
      '&:hover': {
        textDecoration: 'none'
      }
    }
  }
  if(props) return mergeStyles(props, root.link)

  return root.link
}

