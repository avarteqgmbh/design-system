import React from 'react'
import {
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps
} from '@mui/material'

export function Stepper(props: MuiStepperProps): JSX.Element {
  const { children } = props

  return <MuiStepper {...props}>{children}</MuiStepper>
}
