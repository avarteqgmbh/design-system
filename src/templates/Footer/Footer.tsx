import React from 'react'
import { Box, Typography } from '../../components'

export interface FooterProps {
  children?: React.ReactNode
  links: { label: string; onLabelClick: () => void }[]
  slogan: string
}

export const Footer = (props: FooterProps): JSX.Element => {
  const { children, links, slogan } = props

  return (
    <Box sx={classes.root}>
      {children && <Box>{children}</Box>}
      <Typography variant='body2' color='text.secondary'>
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
              ml={6}
              sx={{ transition: 'all ease-in-out 200ms', cursor: 'pointer' }}
            >
              <Typography variant='body2' sx={classes.linkStyles}>
                {link.label}
              </Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

const classes = {
  root: {
    width: '100%',
    mt: 6,
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
