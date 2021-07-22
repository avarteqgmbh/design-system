import React from 'react'
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function CircularProgress(props: MuiCircularProgressProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiCircularProgress
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
