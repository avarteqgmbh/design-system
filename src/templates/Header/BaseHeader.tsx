import React from 'react'
import { Box } from '../../components'
import { MenuItem } from './MenuItem'

export interface Link {
  active?: boolean
  badge?: boolean
  icon?: React.ReactNode
  label?: string
  onClick?: () => void
}

export interface BaseHeaderProps {
  children?: React.ReactNode
  density?: 'small' | 'medium' | 'large'
  logo?: React.ReactNode
  mainLinks?: Link[]
  metaNav?: React.ReactNode
  quickLinks?: Link[]
  userMenu?: React.ReactNode
}

export const BaseHeader = (props: BaseHeaderProps): JSX.Element => {
  const {
    children,
    density = 'medium',
    logo,
    mainLinks,
    metaNav,
    quickLinks,
    userMenu
  } = props

  const densityValue = { small: 3, medium: 4, large: 5 }

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
      p: densityValue[density]
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: densityValue[density]
            }}
          >
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
                density={densityValue[density]}
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
                  density={densityValue[density]}
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
