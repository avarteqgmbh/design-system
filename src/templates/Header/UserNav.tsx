import React from 'react'
import { styled } from '@mui/material/styles'
import { Avatar, Box, Divider, Typography } from '../../components'
import { MainMenuItem } from '../MainMenuItem/MainMenuItem'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'

export interface UserMenuItems {
  label?: string
  items: UserMenuItem[]
}

export interface UserMenuItem {
  id?: number
  label: string
  icon?: React.ReactNode
  endIcon?: React.ReactNode
  onClick?: () => void
}

export interface UserNavprops {
  avatarUrl: string
  density?: number
  firstName: string
  fullName: string
  points: string
  children?: React.ReactNode[]
  userMenu?: UserMenuItems[]
  userMenuSlot?: React.ReactNode
}

export const UserNav = (props: UserNavprops): JSX.Element => {
  const [open, setOpen] = React.useState(false)
  const {
    avatarUrl,
    density = 5,
    firstName,
    fullName,
    points,
    children,
    userMenu,
    userMenuSlot
  } = props

  const onClick = (): void => {
    setOpen(!open)
  }

  return (
    <StyledUserNav sx={{ ml: density }}>
      <Box className='userMenuItem' onClick={onClick}>
        <Box
          sx={{ backgroundImage: `url(${avatarUrl})` }}
          className='avatarWrapper'
        />
        <Box minWidth='80px'>
          <Typography
            variant='subtitle1'
            color='textPrimary'
            fontSize={14}
            lineHeight='16px'
          >
            {firstName}
          </Typography>
          <Typography
            variant='caption'
            color='textSecondary'
            fontSize={12}
            lineHeight='16px'
          >
            {`${points || 0} Points`}
          </Typography>
        </Box>
        <Box
          className='userMenuIcon'
          sx={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ArrowDropDownRoundedIcon />
        </Box>
      </Box>
      {open && (
        <Box className='userMenuDialog' sx={{ boxShadow: 2 }}>
          <Box sx={{ position: 'relative' }}>
            <Avatar src={avatarUrl} sx={{ height: 100, width: 100, mb: 3 }} />
            <Typography variant='h6'>{fullName}</Typography>
            {children && (
              <Box className='userMenuDialogChildrenWrapper'>
                {children.map((item): React.ReactNode => {
                  return <Box ml={3}>{item}</Box>
                })}
              </Box>
            )}
          </Box>
          {userMenu &&
            userMenu.map((item) => {
              return (
                <Box key={item.label}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      my: 3
                    }}
                  >
                    <Divider
                      textAlign='left'
                      sx={{
                        flexGrow: 1,
                        opacity: 0.5,
                        borderColor: 'text.hint'
                      }}
                    >
                      {item.label && <Typography>{item.label}</Typography>}
                    </Divider>
                  </Box>
                  {item.items.map((listItem) => {
                    return (
                      <MainMenuItem
                        key={listItem.label}
                        onClick={(): void => {
                          return listItem.onClick && listItem.onClick()
                        }}
                        size='medium'
                        density={3}
                        orientation='vertical'
                        startIcon={listItem.icon && listItem.icon}
                        endIcon={listItem.endIcon && listItem.endIcon}
                        label={listItem.label}
                      />
                    )
                  })}
                </Box>
              )
            })}
          {userMenuSlot}
        </Box>
      )}
    </StyledUserNav>
  )
}

const StyledUserNav = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    '& .userMenuItem': {
      minHeight: 48,
      display: 'flex',
      alignItems: 'center',
      borderRadius: theme.radius.button,
      backgroundColor: theme.palette.background.light,
      cursor: 'pointer',
      overflow: 'hidden',
      transition: 'all ease-in-out 200ms',
      '&:hover': {
        backgroundColor: theme.palette.background.medium
      }
    },
    '& .avatarWrapper': {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: 48,
      width: 48,
      marginRight: theme.spacing(3)
    },
    '& .userMenuIcon': {
      height: '100%',
      width: 36,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0.5,
      transition: 'all ease-in-out 160ms'
    },
    '& .userMenuDialog': {
      position: 'absolute',
      top: 90,
      right: 0,
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.radius.button,
      padding: theme.spacing(4),
      width: 280
    },
    '& .userMenuDialogChildrenWrapper': {
      position: 'absolute',
      top: 0,
      right: 0,
      display: 'flex'
    }
  }
})
