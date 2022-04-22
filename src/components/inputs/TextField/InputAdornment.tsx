import React from 'react'
import {
  InputAdornment as MuiInputAdornment,
  InputAdornmentProps as MuiInputAdornmentProps
} from '@mui/material'

export function InputAdornment(props: MuiInputAdornmentProps): JSX.Element {
  const { children } = props

  return <MuiInputAdornment {...props}>{children}</MuiInputAdornment>
}
