import React from 'react'
import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps
} from '@mui/material'
import { Badge } from '../Badge/Badge'

export interface AvatarProps extends MuiAvatarProps {
  badge?: boolean | undefined
}

export function Avatar(props: AvatarProps): JSX.Element {
  const { badge = false } = props

  return badge ? (
    <Badge
      overlap='circular'
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant='dot'
    >
      <MuiAvatar {...props} />
    </Badge>
  ) : (
    <MuiAvatar {...props} />
  )
}
