import React from 'react'
import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps
} from '@mui/material'
import { Theme } from '../../../theme/types'

export interface MenuItemProps extends MuiMenuItemProps {
  button?: true | undefined
}

export function MenuItem(props: MenuItemProps): JSX.Element {
  const { children, sx } = props

  return (
    <MuiMenuItem {...props} sx={{ ...sx, ...styles }}>
      {children}
    </MuiMenuItem>
  )
}

const styles = {
  background: 'transparent',
  padding: 2,
  borderRadius: (theme: Theme): string => {
    return `${theme.radius.small}px`
  },

  '& .MuiListItemIcon-root': {
    minWidth: 'auto',
    marginRight: 2,
    color: 'text.primary'
  }
}
