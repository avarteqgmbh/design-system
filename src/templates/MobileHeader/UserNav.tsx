import React from 'react'
import {
  Avatar,
  Box,
  Chip,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography
} from '../../components'

export interface UserNavProps {
  items: MenuItem[]
  motto?: string
  welcome?: string
  avatarUrl?: string
  fullName?: string
  status?: string
  isActive: boolean
}
interface MenuItem {
  label: string
  icon?: React.ReactNode
  chipLabel?: string
  onClick?: () => void
}

export const UserNav: React.FC<UserNavProps> = ({
  motto,
  welcome,
  avatarUrl,
  fullName,
  status,
  items,
  isActive
}) => {
  return (
    <Box sx={classes.root} className={isActive ? 'active' : ''}>
      {motto && (
        <Typography style={{ marginBottom: 20 }} variant='h5'>
          {motto}
        </Typography>
      )}

      <Divider>
        <Typography>{welcome}</Typography>
      </Divider>
      <Box sx={classes.avatarContainer}>
        <Chip
          avatar={<Avatar alt={fullName} src={avatarUrl} />}
          label={fullName}
        />
      </Box>

      <Divider>
        <Typography>{status}</Typography>
      </Divider>
      {items.map((item) => {
        return (
          <MenuItem
            sx={classes.menuItem}
            onClick={(): void => {
              return item.onClick && item.onClick()
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
            <Chip color='primary' label={item.chipLabel} size='small' />
          </MenuItem>
        )
      })}
      <Typography sx={classes.version} color='textSecondary' variant='body2'>
        Version
      </Typography>
    </Box>
  )
}

const classes = {
  root: {
    borderLeftColor: 'background.border',
    borderRightColor: 'transparent',
    transition: 'transform ease-in-out 300ms',

    '& svg': {
      height: 16,
      width: 16,
      minHeight: 16,
      minWidth: 16
    }
  },

  avatarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2
  },

  avatar: {
    display: 'flex',
    alignItems: 'center'
  },

  menuItem: {
    background: 'background.default',
    padding: 3,
    marginBottom: 3,
    borderRadius: 'radius.medium',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'background.border'
  },

  version: {
    position: 'absolute',
    right: 4,
    bottom: 4
  }
}
