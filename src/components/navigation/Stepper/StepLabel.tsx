import React from 'react'
import {
  StepLabel as MuiStepLabel,
  StepLabelProps as MuiStepLabelProps,
  makeStyles,
  createStyles
} from '@material-ui/core'

export function StepLabel(props: MuiStepLabelProps): JSX.Element {
  const classes = useStyles()
  const { children } = props

  return (
    <MuiStepLabel {...props} className={classes.root}>
      {children}
    </MuiStepLabel>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
