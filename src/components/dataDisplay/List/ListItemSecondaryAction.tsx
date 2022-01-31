import React from 'react'
import {
  ListItemSecondaryAction as MuiListItemSecondaryAction,
  ListItemSecondaryActionProps
} from '@mui/material'

export function ListItemSecondaryAction(
  props: ListItemSecondaryActionProps
): JSX.Element {
  const { children } = props
  return (
    <MuiListItemSecondaryAction {...props}>
      {children}
    </MuiListItemSecondaryAction>
  )
}
