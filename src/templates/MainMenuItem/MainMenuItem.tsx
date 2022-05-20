import React from 'react'
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
  icon?: React.ReactNode
  label?: string
  lastItem?: boolean
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

export const MainMenuItem = (props: MainMenuItemProps): JSX.Element => {
  const {
    active = false,
    badge = false,
    className = 'MenuItem',
    density = 5,
    icon,
    label,
    lastItem = false,
    size = 'medium',
    onClick
  } = props

  const MenuItemChildren = (): JSX.Element => {
    return (
      <MuiMenuItem
        className={`${className} ${size} ${icon && !label && 'iconOnly'}`}
        sx={{
          ...classes.root,
          bgcolor: active ? 'primary.main' : 'background.light',
          color: active ? 'primary.contrastText' : 'text.primary',
          mr: badge ? 0 : lastItem ? 0 : density,
          '&:hover': {
            bgcolor: active ? 'primary.dark' : 'background.medium'
          }
        }}
        onClick={(): void => {
          return onClick && onClick()
        }}
      >
        {icon && icon}
        {label && (
          <Typography
            variant='button'
            color={active ? 'contrastText' : 'textPrimary'}
            sx={{
              ...classes.label,
              ml: icon ? 3 : 0
            }}
          >
            {label}
          </Typography>
        )}
      </MuiMenuItem>
    )
  }

  return badge ? (
    <Box mr={density}>
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
    </Box>
  ) : (
    <MenuItemChildren />
  )
}

const classes = {
  root: {
    display: 'flex',
    alignItems: 'center',
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
