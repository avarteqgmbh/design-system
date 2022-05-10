import React from 'react'
import { Box, Typography } from '../../components'

export interface Link {
  label: string
  onLabelClick: () => void
}

export interface FooterProps {
  extended?: boolean
  links: Link[]
  menuItems?: {
    label: string
    onClick?: () => void
    links: Link[]
    children?: React.ReactNode
  }[]
  slogan: string
}

export const Footer = (props: FooterProps): JSX.Element => {
  const { extended = false, links, menuItems, slogan } = props

  const classes = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      mt: 6
    },
    menuItemWrapper: {
      display: 'flex',
      width: extended ? 1200 : '100%',
      borderBottom: '1px solid',
      borderColor: 'background.border',
      '& ul': {
        my: 2,
        pl: 0,
        listStyle: 'none',
        '& li': {
          cursor: 'pointer',
          transition: 'all ease-in-out 200ms',
          py: 2
        }
      },
      pb: 5
    },
    defaultFooterWrapper: {
      width: extended ? 1200 : '100%',
      p: 4,
      bgcolor: 'background.paper',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    linkStyles: {
      color: 'text.secondary',
      '&:hover': {
        color: 'text.primary'
      }
    }
  }

  return (
    <Box sx={classes.root}>
      <Box sx={classes.menuItemWrapper}>
        {menuItems &&
          menuItems.map((menuItem) => {
            return (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  mr: 6,
                  flex: '1',
                  maxWidth: 250,
                  '& .clickable': {
                    cursor: 'pointer',
                    '& h6:hover': {
                      color: 'text.secondary'
                    }
                  }
                }}
              >
                <Box
                  className={menuItem.onClick && 'clickable'}
                  onClick={(): void => {
                    return menuItem.onClick && menuItem.onClick()
                  }}
                >
                  <Typography variant='h6'>{menuItem.label}</Typography>
                </Box>
                <ul>
                  {menuItem.links.map((link) => {
                    return (
                      <li>
                        <Typography variant='body2' sx={classes.linkStyles}>
                          {link.label}
                        </Typography>
                      </li>
                    )
                  })}
                  {menuItem.children}
                </ul>
              </Box>
            )
          })}
      </Box>
      <Box sx={classes.defaultFooterWrapper}>
        <Typography variant='body2' color='text.hint'>
          {slogan}
        </Typography>
        <Box sx={{ display: 'flex' }}>
          {links.map((link) => {
            return (
              <Box
                key={link.label}
                onClick={(): void => {
                  return link.onLabelClick()
                }}
                sx={{
                  transition: 'all ease-in-out 200ms',
                  cursor: 'pointer',
                  ml: 4
                }}
              >
                <Typography variant='body2' sx={classes.linkStyles}>
                  {link.label}
                </Typography>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}
