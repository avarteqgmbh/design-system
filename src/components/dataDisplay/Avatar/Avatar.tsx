import React from 'react'
import { Avatar as MuiAvatar, AvatarProps } from '@mui/material'

export function Avatar(props: AvatarProps): JSX.Element {
  return <MuiAvatar {...props} />
}
