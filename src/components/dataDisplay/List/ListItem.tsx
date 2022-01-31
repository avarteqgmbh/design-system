import React from 'react'
import { ListItem as MuiListItem, ListItemProps } from '@mui/material'

export const ListItem: React.FC<ListItemProps> = (props) => {
  const { children } = props
  return <MuiListItem {...props}>{children}</MuiListItem>
}
