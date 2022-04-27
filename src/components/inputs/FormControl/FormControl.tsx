import React from 'react'
import {
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps
} from '@mui/material'

export function FormControl(props: MuiFormControlProps): JSX.Element {
  const { children } = props

  return <MuiFormControl {...props}>{children}</MuiFormControl>
}
