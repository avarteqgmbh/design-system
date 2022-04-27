import React from 'react'
import {
  StepLabel as MuiStepLabel,
  StepLabelProps as MuiStepLabelProps
} from '@mui/material'

export function StepLabel(props: MuiStepLabelProps): JSX.Element {
  const { children } = props

  return <MuiStepLabel {...props}>{children}</MuiStepLabel>
}
