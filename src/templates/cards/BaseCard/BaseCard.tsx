/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Theme } from '../../../theme/types'
import { Box, Typography, Chip } from '../../../components'

export interface Tag {
  primary?: boolean
  title: string
}

export interface CardProps {
  title: string
  subtitle?: string
  description?: string
  hoverAnimation?: boolean
  image?: string
  tags?: Tag[]
  maxWidth?: number
  onClick: () => void
  children?: React.ReactNode
}

export const BaseCard: React.FC<CardProps> = (props) => {
  const {
    title,
    subtitle,
    description,
    hoverAnimation = true,
    image,
    tags,
    onClick,
    children,
    maxWidth = 450
  } = props
  const classes = {
    root: {
      borderRadius: (theme: Theme): string => {
        return `${theme.radius.card}px`
      },
      bgcolor: 'background.paper',
      overflow: 'hidden',
      transition: '200ms all ease-in-out',
      boxShadow: 1,
      cursor: 'pointer',
      height: '100%',
      maxWidth: maxWidth || '100%',
      '&:hover': {
        transform: hoverAnimation ? 'translateY(-4px)' : '',
        '& .image': {
          transform: hoverAnimation ? 'scale(1.05)' : ''
        }
      }
    },
    imageWrapper: {
      width: '100%',
      height: 180,
      overflow: 'hidden'
    },
    image: {
      transition: '200ms all ease-in-out',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%'
    },
    subtitleWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 2
    },
    tagsWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 2
    }
  }

  return (
    <Box
      onClick={(): void => {
        onClick()
      }}
      // @ts-ignore
      sx={classes.root}
    >
      {image && (
        <Box sx={classes.imageWrapper}>
          <Box className='image' sx={classes.image} />
        </Box>
      )}
      <Box sx={{ p: 4 }}>
        <Box sx={classes.subtitleWrapper}>
          {subtitle && (
            <Typography variant='body2' color='text.secondary'>
              {subtitle}
            </Typography>
          )}
          {tags && (
            <Box sx={classes.tagsWrapper}>
              {tags.map((item) => {
                return (
                  <Chip
                    label={item.title}
                    size='small'
                    sx={{ ml: 2 }}
                    color={item.primary ? 'primary' : 'default'}
                  />
                )
              })}
            </Box>
          )}
        </Box>
        <Typography variant='h6' mb={1}>
          {title}
        </Typography>
        {description && (
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        )}
        {children}
      </Box>
    </Box>
  )
}
