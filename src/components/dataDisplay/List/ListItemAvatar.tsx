import React from 'react'
import {
  ListItemAvatar as MuiListItemAvatar,
  ListItemAvatarProps
} from '@mui/material'

export function ListItemAvatar(props: ListItemAvatarProps): JSX.Element {
  const { children } = props
  return <MuiListItemAvatar {...props}>{children}</MuiListItemAvatar>
}
