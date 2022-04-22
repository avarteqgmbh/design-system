import React from 'react'
import { Icon as MuiIcon, IconProps } from '@mui/material'

export function Icon(props: IconProps): JSX.Element {
  const { children, sx } = props

  return (
    <MuiIcon
      sx={{
        ...sx,
        ...styles
      }}
      {...props}
    >
      {children}
    </MuiIcon>
  )
}

const styles = {
  color: 'text.primary'
}
