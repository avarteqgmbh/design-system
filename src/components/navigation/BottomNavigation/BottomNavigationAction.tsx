import React from 'react'
import {
  BottomNavigationAction as MuiBottomNavigationAction,
  BottomNavigationActionProps
} from '@mui/material'

export function BottomNavigationAction(
  props: BottomNavigationActionProps
): JSX.Element {
  return <MuiBottomNavigationAction {...props} />
}
