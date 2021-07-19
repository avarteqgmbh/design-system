import React from 'react'
import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function LinearProgress(props: MuiLinearProgressProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiLinearProgress
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
