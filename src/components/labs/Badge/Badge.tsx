import React from 'react'
import { Badge as MuiBadge, BadgeProps } from '@mui/material'

export function Badge(props: BadgeProps): JSX.Element {
  const { color = 'primary' } = props
  return <MuiBadge {...props} color={color} />
}
