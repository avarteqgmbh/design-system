import React from 'react'
import { IconName } from '../../components/dataDisplay/AnyIcon/AnyIcon'
import { AnyIcon, Badge, Box, Typography } from '../../components'

export interface MenuItemProps {
  active?: boolean
  badge?: boolean
  icon?: IconName
  label?: string
  onClick?: () => void
}

export const MenuItem = (props: MenuItemProps): JSX.Element => {
  const { active = false, badge = false, icon, label, onClick } = props
  const classes = {
    root: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: '8px',
      cursor: 'pointer',
      bgcolor: active ? 'primary.main' : 'background.light',
      color: active ? 'primary.contrastText' : 'text.primary',
      minHeight: 48,
      mr: badge ? 0 : 5,
      px: 4,
      '&:hover': {
        bgcolor: active ? 'primary.dark' : 'background.medium'
      }
    },
    label: { textTransform: 'none', fontSize: '14px', ml: 3 }
  }

  const MenuItemChildren = (): JSX.Element => {
    return (
      <Box
        sx={classes.root}
        onClick={(): void => {
          return onClick && onClick()
        }}
      >
        {icon && <AnyIcon size='md' hasContrastColor={active} icon={icon} />}
        {label && (
          <Typography
            variant='button'
            color={active ? 'contrastText' : 'textPrimary'}
            sx={classes.label}
          >
            {label}
          </Typography>
        )}
      </Box>
    )
  }

  return badge ? (
    <Box mr={5}>
      <Badge
        variant='dot'
        color='primary'
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        size='md'
      >
        <MenuItemChildren />
      </Badge>
    </Box>
  ) : (
    <MenuItemChildren />
  )
}
