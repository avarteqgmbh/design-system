import React from 'react'
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps
} from '@mui/material'

export interface IconButtonProps extends MuiIconButtonProps {
  border?: boolean
}

export function IconButton(props: IconButtonProps): JSX.Element {
  const { children, border = true, sx } = props
  const styles = {
    bgcolor: 'background.light',
    color: 'text.primary',
    border: border ? '1px solid' : 'none',
    borderColor: 'background.border',
    '&:hover': {
      bgcolor: 'background.medium'
    }
  }

  return (
    <MuiIconButton sx={{ ...sx, ...styles }} {...props}>
      {children}
    </MuiIconButton>
  )
}
