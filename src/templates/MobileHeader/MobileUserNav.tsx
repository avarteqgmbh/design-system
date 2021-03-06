import React from 'react'
import { Avatar, Box, Chip, Divider, Typography } from '../../components'
import { MainMenuItem } from '../MainMenuItem/MainMenuItem'
import { UserMenuItems } from '../Header/UserNav'

export interface MobileUserNavProps {
  avatarUrl?: string
  children?: React.ReactNode[]
  fullName?: string
  isActive: boolean
  motto?: string
  userMenu: UserMenuItems[]
  versionLabel?: string
  welcome?: string
}

export const MobileUserNav: React.FC<MobileUserNavProps> = ({
  avatarUrl,
  children,
  fullName,
  isActive,
  motto,
  userMenu,
  versionLabel,
  welcome
}) => {
  return (
    <Box sx={classes.root} className={isActive ? 'active' : ''}>
      {motto && (
        <Typography sx={{ fontWeight: 'bold', fontSize: 16, mb: 5 }}>
          {motto}
        </Typography>
      )}

      <Divider textAlign='left'>
        <Typography>{welcome}</Typography>
      </Divider>
      <Box sx={classes.avatarContainer}>
        <Chip
          avatar={<Avatar alt={fullName} src={avatarUrl} />}
          sx={{ bgcolor: 'background.light' }}
          label={fullName}
        />
        <Box sx={classes.childrenWrapper}>{children}</Box>
      </Box>

      {userMenu.map((item) => {
        return (
          <Box mb={5} key={item.label}>
            <Divider textAlign='left'>
              {item.label && <Typography>{item.label}</Typography>}
            </Divider>
            {item.items.map((listItem) => {
              return (
                <MainMenuItem
                  key={listItem.id}
                  onClick={(): void => {
                    return listItem.onClick && listItem.onClick()
                  }}
                  size='medium'
                  startIcon={listItem.icon}
                  endIcon={listItem.endIcon && listItem.endIcon}
                  label={listItem.label}
                  density={3}
                  orientation='vertical'
                />
              )
            })}
          </Box>
        )
      })}
      {versionLabel && (
        <Typography sx={classes.version} color='textSecondary' variant='body2'>
          {versionLabel}
        </Typography>
      )}
    </Box>
  )
}

const classes = {
  root: {
    position: 'fixed',
    zIndex: 10,
    top: 0,
    left: '100%',
    padding: 4,
    width: 'calc(100% - 60px)',
    height: '100vh',
    color: 'text.primary',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'transparent',
    borderLeftColor: 'background.border',
    borderRightColor: 'transparent',
    boxSizing: 'border-box',
    bgcolor: 'background.paper',
    boxShadow: 2,
    overflowY: 'auto',
    transition: 'transform ease-in-out 300ms',
    '&.active': {
      transform: 'translateX(-100%)'
    },
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
    mt: 4,
    mb: 5
  },
  childrenWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  version: {
    position: 'absolute',
    right: 16,
    bottom: 16
  }
}
