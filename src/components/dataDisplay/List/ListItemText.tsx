import React from 'react'
import {
  ListItemText as MuiListItemText,
  ListItemTextProps
} from '@mui/material'

export const ListItemText: React.FC<ListItemTextProps> = (props) => {
  return <MuiListItemText {...props} />
}
