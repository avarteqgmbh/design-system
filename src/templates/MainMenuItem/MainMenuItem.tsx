import React from 'react'
import { SxProps } from '@mui/material'
import { styled } from '@mui/material/styles'
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
      <StyledMenuItem
        className={`${className} ${size} ${startIcon && !label && 'iconOnly'}`}
        sx={{
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
                textTransform: 'none',
                fontSize: '14px',
                ml: startIcon ? 3 : 0,
                mr: endIcon ? 3 : 0
              }}
            >
              {label}
            </Typography>
          )}
        </Box>
        {endIcon && endIcon}
      </StyledMenuItem>
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

const StyledMenuItem = styled(MuiMenuItem)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: theme.radius.button,
    cursor: 'pointer',
    minHeight: 48,
    height: 48,
    padding: theme.spacing(0, 4),
    '&.iconOnly': {
      justifyContent: 'center',
      padding: 0,
      height: 48,
      width: 48,
      '&.small': {
        padding: 0,
        height: 32,
        width: 32
      },
      '&.large': {
        padding: 0,
        height: 60,
        width: 60
      }
    },
    '&.small': {
      padding: theme.spacing(0, 3),
      minHeight: 32,
      height: 32
    },
    '&.large': {
      padding: theme.spacing(0, 5),
      minHeight: 60,
      height: 60
    }
  }
})
