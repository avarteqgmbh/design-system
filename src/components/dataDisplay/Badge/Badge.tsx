import React from 'react'
import { Badge as MuiBadge, BadgeProps } from '@mui/material'

export function Badge(props: BadgeProps): JSX.Element {
  const { color = 'primary', sx } = props

  return <MuiBadge sx={{ ...sx, ...styles }} {...props} color={color} />
}

const styles = {
  '& .MuiBadge-badge': {
    border: '1px solid',
    borderColor: 'background.paper'
  },
  '& .MuiBadge-dot': {
    height: '10px',
    minWidth: '10px',
    borderRadius: '8px'
  }
}
