import React from 'react'
import { Badge } from '../Badge/Badge'
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps
} from '@mui/material'
import { styled } from '@mui/material/styles'

export interface IconButtonProps extends MuiIconButtonProps {
  badge?: boolean
  background?: boolean
  border?: boolean
  borderRadius?: 'small' | 'medium' | 'full'
}

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    children,
    badge = false,
    border = true,
    background = true,
    borderRadius = 'full'
  } = props

  return badge ? (
    <Badge
      variant='dot'
      color='primary'
      overlap={borderRadius === 'full' ? 'circular' : 'rectangular'}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      size='medium'
    >
      <StyleIconButton
        className={`
          borderRadius-${borderRadius} 
          ${background && 'withBackground'} 
          ${border && 'withBorder'}
        `}
        {...props}
      >
        {children}
      </StyleIconButton>
    </Badge>
  ) : (
    <StyleIconButton
      className={`
        borderRadius-${borderRadius} 
        ${background && 'withBackground'} 
        ${border && 'withBorder'}
      `}
      {...props}
    >
      {children}
    </StyleIconButton>
  )
}

const StyleIconButton = styled(MuiIconButton)(({ theme }) => {
  return {
    '&.borderRadius-small': {
      borderRadius: theme.radius.small
    },
    '&.borderRadius-medium': {
      borderRadius: theme.radius.medium
    },
    '&.withBackground': {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.light,
      '&:hover': {
        backgroundColor: theme.palette.background.medium
      }
    },
    '&.MuiIconButton-colorPrimary': {
      '&.withBackground': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark
        }
      }
    },
    '&.withBorder': {
      border: '1px solid',
      borderColor: theme.palette.background.border
    }
  }
})
