import React from 'react'
import {
  StepButton as MuiStepButton,
  StepButtonProps as MuiStepButtonProps
} from '@mui/material'

export function StepButton(props: MuiStepButtonProps): JSX.Element {
  const { children } = props

  return <MuiStepButton {...props}>{children}</MuiStepButton>
}
