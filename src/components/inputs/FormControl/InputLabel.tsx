import React from 'react'
import {
  InputLabel as MuiInputLabel,
  InputLabelProps as MuiInputLabelProps
} from '@mui/material'

export function InputLabel(props: MuiInputLabelProps): JSX.Element {
  const { children } = props

  return <MuiInputLabel {...props}>{children}</MuiInputLabel>
}
