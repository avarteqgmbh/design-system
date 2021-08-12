import React from 'react'
import {
  Alert as MuiAlert,
  AlertProps as MuiAlertProps
} from '@material-ui/lab'

import { makeStyles } from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Alert(props: MuiAlertProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiAlert
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
