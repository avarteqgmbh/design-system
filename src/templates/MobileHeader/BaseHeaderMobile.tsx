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
  className?: string
  onPointsClick?: () => void
  paddingTop?: number
  pageTitle?: string
  points?: string
  shopMenuActive?: boolean
  sx?: SxProps
  toggleMainMenu?: () => void
  toggleUserMenu?: () => void
  userMenuActive?: boolean
  userName: string
}

export const BaseHeaderMobile: React.FC<BaseHeaderMobileProps> = React.memo(
  (props) => {
    const {
      backBtn = false,
      backBtnWebView,
      toggleUserMenu,
      toggleMainMenu,
      shopMenuActive,
      children,
      points,
      pageTitle,
      paddingTop = 2,
      onPointsClick,
      userName,
      avatarUrl
    } = props

    return (
      <Box sx={{ ...classes.root, pt: paddingTop }}>
        <Box sx={classes.leftSide}>
          {backBtn ? (
            <BackBtn />
          ) : (
            <HamburgerButton
              shopMenuActive={shopMenuActive}
              toggleMainMenu={toggleMainMenu}
            />
          )}
          {pageTitle && (
            <Typography ml={2} noWrap>
              {pageTitle}
            </Typography>
          )}
          {children}
        </Box>
        <Box sx={classes.rightSide}>
          <Chip
            sx={classes.pointsChip}
            color='primary'
            icon={<AnyIcon icon='coin' size='small' />}
            label={points}
            onClick={onPointsClick}
            size='small'
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
    height: 'var(--header-height)',
    px: 4,
    py: 2,
    background: 'background.paper',
    boxShadow: 2
  },
  leftSide: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    height: 34,
    width: 34
  },
  pageTitle: {
    fontFamily: 'Bold',
    color: 'text.primary',
    marginLeft: 2,
    maxWidth: 'calc(100vw - 180px)',
    overflow: 'hidden'
  },
  pointsChip: {
    paddingLeft: 1,
    '& span': {
      color: 'common.white'
    }
  },
  avatarButton: {
    background: 'transparent',
    border: 'none',
    padding: 0,
    marginLeft: 2
  },
  rightSide: {
    display: 'flex',
    alignItems: 'center'
  }
}
