import React from 'react'
import { IconButton as MuiIconButton, IconButtonProps } from '@mui/material'

export function IconButton(props: IconButtonProps): JSX.Element {
  const { children } = props
  return (
    <MuiIconButton sx={{ bgcolor: 'bg.medium' }} {...props}>
      {children}
    </MuiIconButton>
  )
}
