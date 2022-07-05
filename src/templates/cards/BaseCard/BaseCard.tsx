import React from 'react'
import { styled } from '@mui/material/styles'
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
  return (
    <StyledBaseCard
      onClick={(): void => {
        onClick()
      }}
      sx={{
        boxShadow: 1,
        maxWidth: maxWidth || '100%',
        '&:hover': {
          transform: hoverAnimation ? 'translateY(-4px)' : '',
          '& .image': {
            transform: hoverAnimation ? 'scale(1.05)' : ''
          }
        }
      }}
    >
      {image && (
        <Box className='imageWrapper'>
          <Box className='image' sx={{ backgroundImage: `url(${image})` }} />
        </Box>
      )}
      <Box sx={{ p: 4 }}>
        <Box className='subtitleWrapper'>
          {subtitle && (
            <Typography variant='body2' color='text.secondary'>
              {subtitle}
            </Typography>
          )}
          {tags && (
            <Box className='tagsWrapper'>
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
    </StyledBaseCard>
  )
}

const StyledBaseCard = styled(Box)(({ theme }) => {
  return {
    borderRadius: theme.radius.card,
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
    transition: '200ms all ease-in-out',
    cursor: 'pointer',
    height: '100%',
    '& .imageWrapper': {
      width: '100%',
      height: 180,
      overflow: 'hidden'
    },
    '& .image': {
      transition: '200ms all ease-in-out',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%'
    },
    '& .subtitleWrapper': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(2)
    },
    '& .tagsWrapper': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(2)
    }
  }
})
