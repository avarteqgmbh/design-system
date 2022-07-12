import React from 'react'
import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps
} from '@mui/material'
import { Badge } from '../Badge/Badge'

export interface AvatarProps extends MuiAvatarProps {
  badge?: boolean | undefined
  badgeContent?: React.ReactNode
}

export function Avatar(props: AvatarProps): JSX.Element {
  const { badge = false, badgeContent } = props

  return badge || badgeContent ? (
    <Badge
      overlap='circular'
      hideBadgeWrapper={!!badgeContent}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant={badgeContent ? 'standard' : 'dot'}
      badgeContent={badgeContent && badgeContent}
    >
      <MuiAvatar {...props} />
    </Badge>
  ) : (
    <MuiAvatar {...props} />
  )
}
