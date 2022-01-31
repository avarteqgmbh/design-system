import React from 'react'
import {
  Backdrop as MuiBackdrop,
  BackdropProps as MuiBackdropProps
} from '@mui/material'

export function Backdrop(props: MuiBackdropProps): JSX.Element {
  return <MuiBackdrop {...props} />
}
