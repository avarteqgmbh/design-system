import React from 'react'
import { SvgIcon as MuiSvgIcon, SvgIconProps } from '@mui/material'

export function SvgIcon(props: SvgIconProps): JSX.Element {
  const { children } = props

  return <MuiSvgIcon {...props}>{children}</MuiSvgIcon>
}
