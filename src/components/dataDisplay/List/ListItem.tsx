/* eslint-disable
  @typescript-eslint/no-explicit-any,
  @typescript-eslint/explicit-module-boundary-types
*/

import React from 'react'
import { ListItem as MuiListItem } from '@mui/material'

// TODO: Resolve issue with ListItemProps to replace any type usage
export function ListItem(props: any): JSX.Element {
  const { children } = props
  return <MuiListItem {...props}>{children}</MuiListItem>
}
