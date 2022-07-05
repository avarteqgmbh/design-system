import React from 'react'
import TextTruncate from 'react-text-truncate'
import { styled } from '@mui/material/styles'
import { Box, Chip, Typography } from '../../components'

export interface SlideItem {
  title: string
  subtitle?: string
  description?: string
  onClick?: () => void
  fullWidth?: boolean
  image?: string
  tags: string[]
}

export const Slide = (props: SlideItem): JSX.Element => {
  const {
    title,
    subtitle,
    description,
    onClick,
    fullWidth = false,
    image,
    tags
  } = props

  return (
    <StyledSlide
      sx={{
        backgroundImage: image && `url(${image})`
      }}
      onClick={(): void => {
        return onClick && onClick()
      }}
      tabIndex={0}
      className={image ? '' : 'hasNoBgImg'}
    >
      <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
        {tags && (
          <Box display='flex'>
            {tags.map((tag) => {
              return (
                <Chip
                  color='primary'
                  label={tag}
                  size='small'
                  sx={{ mt: 2, mr: 2 }}
                />
              )
            })}
          </Box>
        )}
      </Box>
      <Box
        className='contentWrapper'
        sx={{
          maxWidth: { xs: '100%', sm: 900, lg: 1200 },
          p: fullWidth ? 4 : 6
        }}
      >
        <Box className='titleWrapper'>
          {subtitle && (
            <Typography
              className='subTitle'
              sx={{
                color: image ? 'grey.200' : 'text.primary',
                textShadow: image ? '0 0 4px #000' : ''
              }}
              gutterBottom
              variant='body2'
            >
              {subtitle}
            </Typography>
          )}
          <Typography
            className='title'
            sx={{
              color: image ? 'common.white' : 'text.primary',
              textShadow: image ? '0 0 4px #000' : ''
            }}
            gutterBottom
            variant='h4'
          >
            {title}
          </Typography>
          {description && (
            <Typography
              className='description'
              sx={{
                textAlign: 'left',
                color: image ? 'grey.100' : 'text.secondary',
                textShadow: image ? '0 0 4px #000' : ''
              }}
            >
              <TextTruncate line={3} truncateText='…' text={description} />
            </Typography>
          )}
        </Box>
      </Box>
    </StyledSlide>
  )
}

const StyledSlide = styled(Box)(({ theme }) => {
  return {
    display: 'block',
    position: 'relative',
    color: theme.palette.common.white,
    height: 360,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderRadius: theme.radius.card,
    '&.hasNoBgImg': {
      backgroundImage: theme.palette.background.gradient
    },
    '& .contentWrapper': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'stretch',
      margin: '0 auto',
      height: 'inherit',
      boxSizing: 'border-box',
      paddingBottom: theme.spacing(7)
    },
    '& .titleWrapper': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%'
    }
  }
})
