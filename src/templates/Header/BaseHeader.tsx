import React from 'react'

import { SxProps } from '@mui/material'
import { Box } from '../../components'
import { MainMenuItem } from '../MainMenuItem/MainMenuItem'

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
  sx?: SxProps
}

export const BaseHeader = (props: BaseHeaderProps): JSX.Element => {
  const {
    children,
    density = 'medium',
    logo,
    mainLinks,
    metaNav,
    quickLinks,
    userMenu,
    sx
  } = props

  const densityValue = { small: 3, medium: 4, large: 5 }

  const classes = {
    baseHeaderWrapper: {
      color: 'text.primary',
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
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'background.paper',
        width: '100%',
        boxShadow: 1,
        ...sx
      }}
    >
      {metaNav && metaNav}
      <Box sx={classes.baseHeaderWrapper} className='baseHeaderWrapper'>
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
              <MainMenuItem
                key={link.label}
                startIcon={link.icon}
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
        <Box sx={classes.quickLinks} className='quickLinks'>
          {quickLinks &&
            quickLinks.map((link) => {
              return (
                <MainMenuItem
                  key={link.label}
                  startIcon={link.icon}
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
