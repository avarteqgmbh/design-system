import React from 'react'
import { Badge } from '../Badge/Badge'
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps
} from '@mui/material'

export interface IconButtonProps extends MuiIconButtonProps {
  badge?: boolean
  border?: boolean
  borderRadius?: 'small' | 'medium' | 'full'
}

export function IconButton(props: IconButtonProps): JSX.Element {
  const {
    children,
    badge = false,
    border = true,
    borderRadius = 'full',
    sx
  } = props
  const styles = {
    bgcolor: 'background.light',
    color: 'text.primary',
    border: border ? '1px solid' : 'none',
    borderColor: 'background.border',
    '&.borderRadius-small': {
      borderRadius: '4px'
    },
    '&.borderRadius-medium': {
      borderRadius: '8px'
    },
    '&:hover': {
      bgcolor: 'background.medium'
    }
  }

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
      <MuiIconButton
        className={`borderRadius-${borderRadius}`}
        sx={{ ...sx, ...styles }}
        {...props}
      >
        {children}
      </MuiIconButton>
    </Badge>
  ) : (
    <MuiIconButton
      className={`borderRadius-${borderRadius}`}
      sx={{ ...sx, ...styles }}
      {...props}
    >
      {children}
    </MuiIconButton>
  )
}
