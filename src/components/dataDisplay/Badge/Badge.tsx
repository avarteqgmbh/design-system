import React from 'react'
import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from '@mui/material'

export interface BadgeProps extends MuiBadgeProps {
  size?: 'small' | 'medium' | 'large'
}

export function Badge(props: BadgeProps): JSX.Element {
  const { color = 'primary', size = 'small', sx } = props

  return (
    <MuiBadge
      className={size}
      sx={{ ...sx, ...styles }}
      color={color}
      {...props}
    />
  )
}

const styles = {
  '& .MuiBadge-dot': {
    height: '10px',
    minWidth: '10px',
    borderRadius: '8px'
  },
  '&.medium': {
    '& .MuiBadge-dot': {
      height: 12,
      minWidth: 12
    }
  },
  '&.large': {
    '& .MuiBadge-dot': {
      height: 16,
      minWidth: 16
    }
  },
  '& .MuiBadge-badge': {
    border: '1px solid',
    borderColor: 'background.paper'
  }
}
