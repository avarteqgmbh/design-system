import React from 'react'
import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps
} from '@mui/material'

export function Snackbar(props: MuiSnackbarProps): JSX.Element {
  return <MuiSnackbar {...props} />
}
