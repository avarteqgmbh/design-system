import React from 'react'
import { SvgIcon as MuiSvgIcon, SvgIconProps } from '@mui/material'

export function SvgIcon(props: SvgIconProps): JSX.Element {
  const { children, sx } = props

  return (
    <MuiSvgIcon sx={{ ...sx, ...styles }} {...props}>
      {children}
    </MuiSvgIcon>
  )
}

const styles = {
  '&.MuiSvgIcon-colorDefault': {
    color: 'text.primary'
  }
}
