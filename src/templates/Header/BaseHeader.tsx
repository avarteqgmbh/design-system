import React from 'react'
import { IconName } from '../../components/dataDisplay/AnyIcon/AnyIcon'
import { Box } from '../../components'
import { MenuItem } from './MenuItem'

export interface Link {
  active?: boolean
  icon?: IconName
  label?: string
  onClick: () => void
}

export interface BaseHeaderProps {
  children?: React.ReactNode
  logo: React.ReactNode
  mainLinks: Link[]
  quickLinks?: Link[]
  userMenu?: React.ReactNode
}

export const BaseHeader = (props: BaseHeaderProps): JSX.Element => {
  const { children, logo, mainLinks, quickLinks, userMenu } = props

  const classes = {
    root: {
      display: 'flex',
      alignItems: 'center',
      bgcolor: 'background.paper',
      p: 5,
      width: '100%',
      boxShadow: 1
    }
  }

  return (
    <Box sx={classes.root}>
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 5 }}>{logo}</Box>
      {mainLinks.map((link) => {
        return (
          <MenuItem
            icon={link.icon}
            label={link.label}
            active={link.active}
            onClick={(): void => {
              return link.onClick && link.onClick()
            }}
          />
        )
      })}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          flex: 1,
          mr: 5
        }}
      >
        {children && children}
        {quickLinks &&
          quickLinks.map((link) => {
            return (
              <MenuItem
                icon={link.icon}
                label={link.label}
                active={link.active}
                onClick={(): void => {
                  return link.onClick && link.onClick()
                }}
              />
            )
          })}
        {userMenu && userMenu}
      </Box>
    </Box>
  )
}
