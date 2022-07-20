import React from 'react'
import {
  ListItemText as MuiListItemText,
  ListItemTextProps
} from '@mui/material'

export function ListItemText(props: ListItemTextProps): JSX.Element {
  const { sx } = props

  return <MuiListItemText {...props} sx={{ ...styles, ...sx }} />
}

const styles = {
  color: 'text.primary'
}
