import React from 'react'
import { Box, Typography } from '../../components'

export interface FooterProps {
  links: { label: string; onLabelClick: () => void }[]
  slogan: string
}

export const Footer = (props: FooterProps): JSX.Element => {
  const { links, slogan } = props

  return (
    <Box
      sx={{
        width: '100%',
        mt: 6,
        p: 4,
        bgcolor: 'background.paper',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Typography variant='body2' color='text.secondary'>
        {slogan}
      </Typography>
      <Box
        sx={{
          display: 'flex'
        }}
      >
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
              <Typography
                variant='body2'
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'text.primary'
                  }
                }}
              >
                {link.label}
              </Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
