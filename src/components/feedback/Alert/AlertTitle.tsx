import React from 'react'
import { AlertTitle as MuiAlertTitle } from '@mui/material'
import { AlertTitleProps as MuiAlertTitleProps } from '@mui/lab'

export function AlertTitle(props: MuiAlertTitleProps): JSX.Element {
  return <MuiAlertTitle {...props} />
}
