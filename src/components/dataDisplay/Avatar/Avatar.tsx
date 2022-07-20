import React from 'react'
import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps
} from '@mui/material'
import { Badge } from '../Badge/Badge'
import { removeKeysFromProps } from '../../../util'

export interface AvatarProps extends MuiAvatarProps {
  badge?: boolean | undefined
  badgeContent?: React.ReactNode
}

export const Avatar = (props: AvatarProps): JSX.Element => {
  const { badge = false, badgeContent } = props

  const muiProps = removeKeysFromProps(props as Record<string, unknown>, [
    'badge',
    'badgeContent'
  ])

  return badge || badgeContent ? (
    <Badge
      overlap='circular'
      hideBadgeWrapper={!!badgeContent}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant={badgeContent ? 'standard' : 'dot'}
      badgeContent={badgeContent && badgeContent}
    >
      <MuiAvatar {...muiProps} />
    </Badge>
  ) : (
    <MuiAvatar {...muiProps} />
  )
}
