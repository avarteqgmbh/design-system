import React from 'react'
import { Avatar, Button, Box, Divider, Typography } from '../../components'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'

export interface UserMenuItems {
  label?: string
  items: UserMenuItem[]
}

export interface UserMenuItem {
  id: number
  label: string
  icon: React.ReactNode
  endIcon: React.ReactNode
  onClick?: () => void
}

export interface UserNavprops {
  avatarUrl: string
  firstName: string
  fullName: string
  points: string
  children?: React.ReactNode[]
  userMenu: UserMenuItems[]
}

export const UserNav = (props: UserNavprops): JSX.Element => {
  const [open, setOpen] = React.useState(false)
  const { avatarUrl, firstName, fullName, points, children, userMenu } = props

  const onClick = (): void => {
    setOpen(!open)
  }

  const classes = {
    root: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    },
    userMenuItem: {
      minHeight: 48,
      display: 'flex',
      alignItems: 'center',
      borderRadius: '8px',
      bgcolor: 'background.light',
      cursor: 'pointer',
      overflow: 'hidden',
      transition: 'all ease-in-out 200ms',
      '&:hover': {
        bgcolor: 'background.medium'
      }
    },
    avatarWrapper: {
      backgroundImage: `url(${avatarUrl})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: 48,
      width: 48,
      mr: 3
    },
    userMenuIcon: {
      height: '100%',
      width: 36,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0.5,
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'all ease-in-out 160ms'
    },
    userMenuDialog: {
      position: 'absolute',
      top: 90,
      right: 0,
      bgcolor: 'background.paper',
      borderRadius: '8px',
      boxShadow: 2,
      p: 4,
      width: 280
    },
    userMenuDialogChildrenWrapper: {
      position: 'absolute',
      top: 0,
      right: 0,
      display: 'flex'
    },
    userMenuListItem: {
      justifyContent: 'flex-start',
      mt: 4,
      height: 40,
      position: 'relative',
      '&:hover': {
        boxShadow: 0
      },
      '& .MuiButton-endIcon': {
        position: 'absolute',
        top: 7,
        right: 12,
        '& .MuiChip-filled': {
          minWidth: 24,
          fontSize: 12,
          py: 1
        }
      }
    }
  }

  return (
    <Box sx={classes.root}>
      <Box sx={classes.userMenuItem} onClick={onClick}>
        <Box sx={classes.avatarWrapper} />
        <Box minWidth='80px'>
          <Typography variant='subtitle1' color='textPrimary' fontSize={14}>
            {firstName}
          </Typography>
          <Typography variant='caption' color='textSecondary' fontSize={12}>
            {`${points || 0} Points`}
          </Typography>
        </Box>
        <Box sx={classes.userMenuIcon}>
          <ArrowDropDownRoundedIcon />
        </Box>
      </Box>
      {open && (
        <Box sx={classes.userMenuDialog}>
          <Box sx={{ position: 'relative' }}>
            <Avatar src={avatarUrl} sx={{ height: 100, width: 100, mb: 3 }} />
            <Typography variant='h6'>{fullName}</Typography>
            {children && (
              <Box sx={classes.userMenuDialogChildrenWrapper}>
                {children.map((item): React.ReactNode => {
                  return <Box ml={3}>{item}</Box>
                })}
              </Box>
            )}
          </Box>

          {userMenu.map((item) => {
            return (
              <>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    my: 3
                  }}
                >
                  <Divider
                    textAlign='left'
                    sx={{ flexGrow: 1, opacity: 0.5, borderColor: 'text.hint' }}
                  >
                    {item.label && <Typography>{item.label}</Typography>}
                  </Divider>
                </Box>
                {item.items.map((listItem) => {
                  return (
                    <Button
                      key={listItem.id}
                      onClick={(): void => {
                        return listItem.onClick && listItem.onClick()
                      }}
                      size='small'
                      startIcon={listItem.icon}
                      endIcon={listItem.endIcon && listItem.endIcon}
                      color='secondary'
                      fullWidth
                      sx={classes.userMenuListItem}
                    >
                      {listItem.label}
                    </Button>
                  )
                })}
              </>
            )
          })}
        </Box>
      )}
    </Box>
  )
}
