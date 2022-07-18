import React from 'react'
import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { removeKeysFromProps } from '../../../util'

export interface BadgeProps extends MuiBadgeProps {
  size?: 'small' | 'medium' | 'large'
  hideBadgeWrapper?: boolean
}

export const Badge: React.FC<BadgeProps> = (props) => {
  const { color = 'primary', size = 'small', hideBadgeWrapper = false } = props

  const muiProps = removeKeysFromProps(props as Record<string, unknown>, [
    'size',
    'hideBadgeWrapper'
  ])

  return (
    <StyledMuiBadge
      className={`${size} ${hideBadgeWrapper && 'hideBadgeWrapper'}`}
      color={color}
      {...muiProps}
    />
  )
}

const StyledMuiBadge = styled(MuiBadge)(({ theme }) => {
  return {
    '&.hideBadgeWrapper': {
      '& .MuiBadge-badge': {
        background: 'none',
        border: 0
      }
    },
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
