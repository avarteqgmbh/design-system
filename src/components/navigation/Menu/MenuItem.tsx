import React from 'react'
import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps
} from '@mui/material'
import { styled } from '@mui/material/styles'

export interface MenuItemProps extends MuiMenuItemProps {
  button?: true | undefined
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { children } = props

  return <StyledMuiMenuItem {...props}>{children}</StyledMuiMenuItem>
}

const StyledMuiMenuItem = styled(MuiMenuItem)(({ theme }) => {
  return {
    background: 'transparent',
    padding: 2,
    borderRadius: theme.radius.small,
    '& .MuiListItemIcon-root': {
      minWidth: 'auto',
      marginRight: 2,
      color: theme.palette.text.primary
    }
  }
})
