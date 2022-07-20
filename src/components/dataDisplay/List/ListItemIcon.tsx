import React from 'react'
import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps
} from '@mui/material'

export function ListItemIcon(props: ListItemIconProps): JSX.Element {
  const { children, sx } = props

  return (
    <MuiListItemIcon {...props} sx={{ ...styles, ...sx }}>
      {children}
    </MuiListItemIcon>
  )
}

const styles = {
  '& .MuiSvgIcon-root': {
    color: 'text.primary'
  }
}
