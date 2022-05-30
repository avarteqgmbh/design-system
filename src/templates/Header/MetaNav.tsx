import React from 'react'
import { Link } from './BaseHeader'
import { MainMenuItem } from '../MainMenuItem/MainMenuItem'
import { Box } from '../../components'

export interface MetaNavProps {
  density?: number
  mainLinks: Link[]
  quickLinks: Link[]
}

export const MetaNav = (props: MetaNavProps): JSX.Element => {
  const { density = 5, mainLinks, quickLinks } = props
  const classes = {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      p: density,
      pl: 0,
      borderBottom: '1px solid',
      borderColor: 'background.border'
    },
    linkWrapper: {
      display: 'flex',
      alignItems: 'center'
    }
  }

  return (
    <Box sx={classes.root}>
      <Box sx={classes.linkWrapper}>
        {mainLinks.map((link) => {
          return (
            <MainMenuItem
              density={density}
              size='small'
              label={link.label}
              startIcon={link.icon}
              badge={link.badge}
              onClick={(): void => {
                return link.onClick && link.onClick()
              }}
            />
          )
        })}
      </Box>
      <Box sx={classes.linkWrapper}>
        {quickLinks.map((link) => {
          return (
            <MainMenuItem
              density={density}
              size='small'
              label={link.label}
              startIcon={link.icon}
              badge={link.badge}
              onClick={(): void => {
                return link.onClick && link.onClick()
              }}
            />
          )
        })}
      </Box>
    </Box>
  )
}
