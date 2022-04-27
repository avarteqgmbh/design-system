import React from 'react'
import { Step as MuiStep, StepProps as MuiStepProps } from '@mui/material'

export function Step(props: MuiStepProps): JSX.Element {
  const { children } = props

  return <MuiStep {...props}>{children}</MuiStep>
}
