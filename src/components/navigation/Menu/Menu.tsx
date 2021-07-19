import React from 'react'
import { Menu as MuiMenu, MenuProps as MuiMenuProps } from '@material-ui/core'

export function Menu(props: MuiMenuProps): JSX.Element {
  const { children } = props
  return <MuiMenu {...props}>{children}</MuiMenu>
}
