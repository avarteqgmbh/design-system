import React from 'react'
import {
  BottomNavigationAction as MuiBottomNavigationAction,
  BottomNavigationActionProps
} from '@material-ui/core'

export function BottomNavigationAction(
  props: BottomNavigationActionProps
): JSX.Element {
  return <MuiBottomNavigationAction {...props} />
}
