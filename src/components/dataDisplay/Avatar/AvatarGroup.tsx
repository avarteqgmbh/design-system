import React from 'react'
import { AvatarGroup as MuiAvatarGroup } from '@mui/material'
import { AvatarGroupProps } from '@mui/lab'

export function AvatarGroup(props: AvatarGroupProps): JSX.Element {
  const { children } = props
  return <MuiAvatarGroup {...props}>{children}</MuiAvatarGroup>
}
