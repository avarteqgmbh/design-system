import React from 'react'
import { CardMedia as MuiCardMedia, CardMediaProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
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
