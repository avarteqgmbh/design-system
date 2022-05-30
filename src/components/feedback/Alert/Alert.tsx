import React from 'react'
import { Alert as MuiAlert } from '@mui/material'
import { AlertProps as MuiAlertProps } from '@mui/lab'

export function Alert(props: MuiAlertProps): JSX.Element {
  const { variant = 'filled' } = props

  return <MuiAlert {...props} variant={variant} />
}
