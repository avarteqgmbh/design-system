/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Theme } from '../../../theme/types'
import { Box, Typography } from '../../../index'

export interface HighlightProductCardProps {
  title: string
  subtitle?: string
  onClick: () => void
  imageUrl: string
  children?: React.ReactNode
}

export const HighlightProductCard: React.FC<HighlightProductCardProps> = (
  props
) => {
  const { title, subtitle, onClick, imageUrl, children } = props
  const classes = {
    root: {
      position: 'relative',
      borderRadius: (theme: Theme): string => {
        return `${theme.radius.card}px`
      },
      bgcolor: 'background.paper',
      overflow: 'hidden',
      transition: '200ms all ease-in-out',
      boxShadow: 1,
      cursor: 'pointer',
      height: { xs: 164, sm: 400 },
      '@media screen and (min-width: 600px)': {
        '&:hover': {
          transform: 'translateY(-4px)',
          '& .image': {
            transform: 'scale(1.05)'
          },
          '& .image-overlay': {
            opacity: 1,
            transition: 'all ease-in-out 200ms'
          },
          '& .content': {
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'all ease-in-out 200ms'
          }
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
      backgroundImage: `url(${imageUrl})`,
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
      opacity: 0,
      transition: '200ms all ease-in-out',
      background:
        'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.6) 100%)',
      height: '100%',
      width: '100%'
    },
    content: {
      position: 'relative',
      background: {
        xs: 'linear-gradient(to bottom,rgba(0,0,0,0) 70%, rgba(0,0,0,.45))',
        sm: 'none'
      },
      zIndex: 1,
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: { xs: 'flex-end', sm: 'center' },
      alignItems: 'center',
      opacity: { xs: 1, sm: 0 },
      transform: { xs: 'none', sm: 'translateY(20px)' }
    },
    title: {
      mt: 2,
      mb: { xs: 2, sm: 4 },
      fontSize: { xs: 14, sm: 32 }
    }
  }

  return (
    <Box
      onClick={(): void => {
        return onClick()
      }}
      // @ts-ignore
      sx={classes.root}
    >
      <Box sx={classes.overlay}>
        <Box className='image' sx={classes.image} />
        <Box className='image-overlay' sx={classes.imageOverlay} />
      </Box>
      <Box className='content' sx={classes.content}>
        <Typography
          fontSize={20}
          fontWeight='bold'
          color='primary'
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          {subtitle}
        </Typography>
        <Typography variant='h4' sx={classes.title} color='common.white'>
          {title}
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>{children}</Box>
      </Box>
    </Box>
  )
}
