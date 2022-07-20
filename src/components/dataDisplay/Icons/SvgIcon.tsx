import React from 'react'
import { SvgIcon as MuiSvgIcon, SvgIconProps } from '@mui/material'

export function SvgIcon(props: SvgIconProps): JSX.Element {
  const { children, sx } = props

  return (
    <MuiSvgIcon {...props} sx={{ ...styles, ...sx }}>
      {children}
    </MuiSvgIcon>
  )
}

const styles = {
  '&.MuiSvgIcon-colorDefault': {
    color: 'text.primary'
  }
}
