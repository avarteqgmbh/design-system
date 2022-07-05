import React from 'react'
import { SxProps } from '@mui/material'

import {
  AnyIcon,
  Avatar,
  Box,
  Chip,
  IconButton,
  Typography
} from '../../components'

import { BackBtn } from './BackBtn'
import { HamburgerButton } from './HamburgerButton'

export interface BaseHeaderMobileProps {
  avatarUrl?: string
  backBtn?: boolean
  backBtnWebView?: () => void
  callback?: () => void
  className?: string
  headerHeight?: number
  notifications?: boolean
  newNotifications?: boolean
  onNotificationClick?: () => void
  onPointsClick?: () => void
  paddingTop?: number
  pageTitle?: string
  points?: string
  pointsIcon: JSX.Element
  mainMenuActive?: boolean
  sx?: SxProps
  toggleMainMenu?: () => void
  toggleUserMenu?: () => void
  userMenuActive?: boolean
  userName: string
}

export const BaseHeaderMobile: React.FC<BaseHeaderMobileProps> = React.memo(
  (props) => {
    const {
      avatarUrl,
      backBtn = false,
      backBtnWebView,
      callback,
      children,
      headerHeight,
      notifications = false,
      newNotifications = false,
      onNotificationClick,
      onPointsClick,
      points,
      pointsIcon,
      pageTitle,
      paddingTop = 3,
      mainMenuActive,
      toggleUserMenu,
      toggleMainMenu,
      userName
    } = props

    return (
      <Box sx={{ ...classes.root, pt: paddingTop, height: headerHeight }}>
        <Box sx={classes.leftColumn}>
          {backBtn ? (
            <BackBtn callback={callback} />
          ) : (
            <HamburgerButton
              mainMenuActive={mainMenuActive}
              toggleMainMenu={toggleMainMenu}
            />
          )}
          {pageTitle && (
            <Typography
              ml={4}
              sx={{
                ...classes.pageTitle,
                maxWidth: `calc(100vw - ${notifications ? '280px' : '220px'})`
              }}
              noWrap
            >
              {pageTitle}
            </Typography>
          )}
          {children}
        </Box>
        <Box sx={classes.rightColumn}>
          {notifications && (
            <Box mr={4}>
              <IconButton
                badge={newNotifications}
                sx={{ background: 'transparent' }}
                onClick={onNotificationClick}
              >
                <AnyIcon icon='notifications' size='medium' />
              </IconButton>
            </Box>
          )}
          <Chip
            sx={classes.pointsChip}
            color='primary'
            icon={pointsIcon}
            label={points}
            onClick={onPointsClick}
          />
          {!backBtnWebView && (
            <IconButton sx={classes.avatarButton} onClick={toggleUserMenu}>
              <Avatar
                alt={userName}
                src={avatarUrl?.includes('missing.png') ? undefined : avatarUrl}
                style={{ width: 32, height: 32 }}
                variant='circular'
              />
            </IconButton>
          )}
        </Box>
      </Box>
    )
  }
)

const classes = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    wrap: 'nowrap',
    px: 4,
    py: 3,
    bgcolor: 'background.paper',
    boxShadow: 2
  },
  leftColumn: {
    display: 'flex',
    alignItems: 'center'
  },
  pointsChip: {
    paddingLeft: 1,
    '& span': {
      color: 'common.white'
    }
  },
  pageTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden'
  },
  avatarButton: {
    background: 'transparent',
    border: 'none',
    padding: 0,
    marginLeft: 4
  },
  rightColumn: {
    display: 'flex',
    alignItems: 'center'
  }
}
