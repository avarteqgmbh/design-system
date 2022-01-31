import React from 'react'
import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps
} from '@mui/material'

export function ListItemIcon(props: ListItemIconProps): JSX.Element {
  const { children } = props
  return <MuiListItemIcon {...props}>{children}</MuiListItemIcon>
}
