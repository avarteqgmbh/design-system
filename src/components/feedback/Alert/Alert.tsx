import React from 'react'
import { Alert as MuiAlert } from '@mui/material'
import { AlertProps as MuiAlertProps } from '@mui/lab'

export function Alert(props: MuiAlertProps): JSX.Element {
  return <MuiAlert {...props} />
}
