import React from 'react'
import { Link } from './BaseHeader'
import { MenuItem } from './MenuItem'
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
      borderBottom: '1px solid',
      borderColor: 'background.border'
    },
    linkWrapper: {
      display: 'flex',
      alignItems: 'center',
      '& .MenuItem:last-child': {
        mr: 0
      }
    }
  }

  return (
    <Box sx={classes.root}>
      <Box sx={classes.linkWrapper}>
        {mainLinks.map((link) => {
          return (
            <MenuItem
              density={density}
              size='sm'
              label={link.label}
              icon={link.icon}
              badge={link.badge}
              onClick={(): void => {
                link.onClick()
              }}
            />
          )
        })}
      </Box>
      <Box sx={classes.linkWrapper}>
        {quickLinks.map((link) => {
          return (
            <MenuItem
              density={density}
              size='sm'
              label={link.label}
              icon={link.icon}
              badge={link.badge}
              onClick={(): void => {
                link.onClick()
              }}
            />
          )
        })}
      </Box>
    </Box>
  )
}
