import React from 'react'
import { IconButton as MuiIconButton, IconButtonProps } from '@mui/material'

export function IconButton(props: IconButtonProps): JSX.Element {
  const { children, sx } = props

  return (
    <MuiIconButton sx={{ ...sx, ...styles }} {...props}>
      {children}
    </MuiIconButton>
  )
}

const styles = {
  color: 'text.primary'
}
