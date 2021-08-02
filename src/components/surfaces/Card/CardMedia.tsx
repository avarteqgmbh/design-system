import React from 'react'
import {
  CardMedia as MuiCardMedia,
  CardMediaProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function CardMedia(props: CardMediaProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiCardMedia
      classes={{
        root: classes.root
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
