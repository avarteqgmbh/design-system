import React from 'react'
import {
  Backdrop as MuiBackdrop,
  BackdropProps as MuiBackdropProps
} from '@mui/material'

export interface BackdropProps extends MuiBackdropProps {
  primary?: boolean | undefined
}

export function Backdrop(props: BackdropProps): JSX.Element {
  const { primary = true, sx } = props

  return (
    <MuiBackdrop
      {...props}
      className={primary ? 'primary' : ''}
      sx={{ ...styles, ...sx }}
    />
  )
}

const styles = {
  color: 'text.primary',
  '&.primary': {
    color: 'primary.main'
  }
}
