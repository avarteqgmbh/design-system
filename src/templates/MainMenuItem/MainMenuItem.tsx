import React from 'react'
import { SxProps } from '@mui/material'
import {
  Badge,
  Box,
  MenuItem as MuiMenuItem,
  Typography
} from '../../components'

export interface MainMenuItemProps {
  active?: boolean
  badge?: boolean
  className?: string
  density?: number
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  key?: string | number
  label?: string
  orientation?: 'horizontal' | 'vertical'
  size?: 'small' | 'medium' | 'large'
  sx?: SxProps
  onClick?: () => void
}

export const MainMenuItem = (props: MainMenuItemProps): JSX.Element => {
  const {
    active = false,
    badge = false,
    className = 'MenuItem',
    density = 5,
    startIcon,
    endIcon,
    key,
    label,
    orientation = 'horizontal',
    size = 'medium',
    sx,
    onClick
  } = props

  const MenuItemChildren = (): JSX.Element => {
    return (
      <MuiMenuItem
        className={`${className} ${size} ${startIcon && !label && 'iconOnly'}`}
        sx={{
          ...classes.root,
          ...sx,
          bgcolor: active ? 'primary.main' : 'background.light',
          color: active ? 'primary.contrastText' : 'text.primary',
          mt: orientation === 'vertical' ? density : 0,
          ml: orientation === 'horizontal' ? density : 0,
          '&:hover': {
            bgcolor: active ? 'primary.dark' : 'background.medium'
          }
        }}
        onClick={(): void => {
          return onClick && onClick()
        }}
        key={key}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {startIcon && startIcon}
          {label && (
            <Typography
              variant='button'
              color={active ? 'contrastText' : 'textPrimary'}
              sx={{
                ...classes.label,
                ml: startIcon ? 3 : 0,
                mr: endIcon ? 3 : 0
              }}
            >
              {label}
            </Typography>
          )}
        </Box>
        {endIcon && endIcon}
      </MuiMenuItem>
    )
  }

  return badge ? (
    <Badge
      variant='dot'
      color='primary'
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      size='medium'
    >
      <MenuItemChildren />
    </Badge>
  ) : (
    <MenuItemChildren />
  )
}

const classes = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '8px',
    cursor: 'pointer',
    minHeight: 48,
    height: 48,
    px: 4,
    '&.iconOnly': {
      justifyContent: 'center',
      px: 0,
      height: 48,
      width: 48,
      '&.small': {
        px: 0,
        height: 32,
        width: 32
      },
      '&.large': {
        px: 0,
        height: 60,
        width: 60
      }
    },
    '&.small': {
      px: 3,
      minHeight: 32,
      height: 32
    },
    '&.large': {
      px: 5,
      minHeight: 60,
      height: 60
    }
  },
  label: { textTransform: 'none', fontSize: '14px' }
}
