import React from 'react'
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationProps
} from '@material-ui/core'

export function BottomNavigation(props: BottomNavigationProps): JSX.Element {
  return <MuiBottomNavigation {...props} />
}
