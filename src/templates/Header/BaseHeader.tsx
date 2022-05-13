import React from 'react'
import { Box } from '../../components'
import { MenuItem } from './MenuItem'

export interface Link {
  active?: boolean
  badge?: boolean
  icon?: React.ReactNode
  label?: string
  onClick: () => void
}

export interface BaseHeaderProps {
  children?: React.ReactNode
  density?: number
  logo?: React.ReactNode
  mainLinks?: Link[]
  metaNav?: React.ReactNode
  quickLinks?: Link[]
  userMenu?: React.ReactNode
}

export const BaseHeader = (props: BaseHeaderProps): JSX.Element => {
  const {
    children,
    density = 5,
    logo,
    mainLinks,
    metaNav,
    quickLinks,
    userMenu
  } = props

  const classes = {
    root: {
      position: 'relative',
      bgcolor: 'background.paper',
      width: '100%',
      boxShadow: 1
    },
    baseHeaderWrapper: {
      display: 'flex',
      alignItems: 'center',
      p: density
    },
    quickLinks: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flex: 1
    }
  }

  return (
    <Box sx={classes.root}>
      {metaNav && metaNav}
      <Box sx={classes.baseHeaderWrapper}>
        {logo && (
          <Box sx={{ display: 'flex', alignItems: 'center', mr: density }}>
            {logo}
          </Box>
        )}
        {mainLinks &&
          mainLinks.map((link) => {
            return (
              <MenuItem
                icon={link.icon}
                label={link.label}
                active={link.active}
                badge={link.badge}
                density={density}
                onClick={(): void => {
                  return link.onClick && link.onClick()
                }}
              />
            )
          })}
        <Box sx={classes.quickLinks}>
          {quickLinks &&
            quickLinks.map((link) => {
              return (
                <MenuItem
                  icon={link.icon}
                  label={link.label}
                  active={link.active}
                  badge={link.badge}
                  density={density}
                  onClick={(): void => {
                    return link.onClick && link.onClick()
                  }}
                />
              )
            })}
          {userMenu && userMenu}
        </Box>
      </Box>
      {children && children}
    </Box>
  )
}
