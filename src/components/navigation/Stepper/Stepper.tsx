import React from 'react'
import {
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps,
  makeStyles,
  createStyles
} from '@material-ui/core'

export function Stepper(props: MuiStepperProps): JSX.Element {
  const classes = useStyles()
  const { children } = props

  return (
    <MuiStepper {...props} className={classes.root}>
      {children}
    </MuiStepper>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
