import React from 'react'
import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps
} from '@mui/material'

export interface MenuItemProps extends MuiMenuItemProps {
  button?: true | undefined
}

export function MenuItem(props: MenuItemProps): JSX.Element {
  const { children } = props
  return (
    <MuiMenuItem
      {...props}
      sx={{
        bgcolor: 'transparent',
        padding: 2,
        borderRadius: (theme): string => {
          return `${theme.radius.small}px`
        },

        '& .MuiListItemIcon-root': {
          minWidth: 'auto',
          marginRight: 2,
          color: 'text.primary'
        }
      }}
    >
      {children}
    </MuiMenuItem>
  )
}
