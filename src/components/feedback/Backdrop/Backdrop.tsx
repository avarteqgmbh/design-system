import React from 'react'
import {
  Backdrop as MuiBackdrop,
  BackdropProps as MuiBackdropProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Backdrop(props: MuiBackdropProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiBackdrop
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
