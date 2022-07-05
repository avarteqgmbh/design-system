import React from 'react'
import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export interface BadgeProps extends MuiBadgeProps {
  size?: 'small' | 'medium' | 'large'
}

export const Badge: React.FC<BadgeProps> = (props) => {
  const { color = 'primary', size = 'small' } = props

  return <StyledMuiBadge className={size} color={color} {...props} />
}

const StyledMuiBadge = styled(MuiBadge)(({ theme }) => {
  return {
    '& .MuiBadge-dot': {
      height: '10px',
      minWidth: '10px',
      borderRadius: theme.radius.large
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
      borderColor: theme.palette.background.paper
    }
  }
})
