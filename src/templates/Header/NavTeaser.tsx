import React from 'react'
import { Box, Typography } from '../../components'

interface NavTeaserProps {
  title: string
  image: string
  onClick: () => void
}

export const NavTeaser = (props: NavTeaserProps): JSX.Element => {
  const { title, image, onClick } = props
  const classes = {
    root: {
      flex: 1,
      position: 'relative',
      borderRadius: '8px',
      bgcolor: 'background.paper',
      overflow: 'hidden',
      transition: '200ms all ease-in-out',
      boxShadow: 1,
      cursor: 'pointer',
      '&:hover': {
        '& .image-overlay': {
          opacity: 0
        }
      }
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    },
    image: {
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      transition: '200ms all ease-in-out',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%'
    },
    imageOverlay: {
      zIndex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 1,
      transition: '200ms all ease-in-out',
      background: 'rgba(0, 0, 0, 0.3)',
      height: '100%',
      width: '100%'
    },
    content: {
      position: 'relative',
      zIndex: 1,
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
  return (
    <Box
      sx={classes.root}
      onClick={(): void => {
        return onClick && onClick()
      }}
    >
      <Box sx={classes.overlay}>
        <Box className='image' sx={classes.image} />
        <Box className='image-overlay' sx={classes.imageOverlay} />
      </Box>
      <Box className='content' sx={classes.content}>
        <Typography
          variant='h6'
          sx={{ textShadow: '0 0 4px #000' }}
          color='common.white'
        >
          {title}
        </Typography>
      </Box>
    </Box>
  )
}
