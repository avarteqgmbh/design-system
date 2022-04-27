import React from 'react'
import {
  StepContent as MuiStepContent,
  StepContentProps as MuiStepContentProps
} from '@mui/material'

export function StepContent(props: MuiStepContentProps): JSX.Element {
  const { children } = props

  return <MuiStepContent {...props}>{children}</MuiStepContent>
}
