import React from 'react'
import {
  AlertTitle as MuiAlertTitle,
  AlertTitleProps as MuiAlertTitleProps
} from '@material-ui/lab'

import { makeStyles } from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function AlertTitle(props: MuiAlertTitleProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiAlertTitle
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
