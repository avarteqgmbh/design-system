import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Typography } from '../../../components'

export interface HighlightProductCardProps {
  title: string
  subtitle?: string
  onClick: () => void
  image: string
  children?: React.ReactNode
}

export const HighlightProductCard: React.FC<HighlightProductCardProps> = (
  props
) => {
  const { title, subtitle, onClick, image, children } = props

  return (
    <StyledHighlightProductCard
      onClick={(): void => {
        return onClick()
      }}
      sx={{ boxShadow: 1, height: { xs: 164, sm: 400 } }}
    >
      <Box className='overlay'>
        <Box className='image' sx={{ backgroundImage: `url(${image})` }} />
        <Box className='imageOverlay' />
      </Box>
      <Box
        className='content'
        sx={{
          background: {
            xs: 'linear-gradient(to bottom,rgba(0,0,0,0) 70%, rgba(0,0,0,.45))',
            sm: 'none'
          },
          justifyContent: { xs: 'flex-end', sm: 'center' },
          opacity: { xs: 1, sm: 0 },
          transform: { xs: 'none', sm: 'translateY(20px)' },
          maxWidth: { md: 480 },
          px: 4
        }}
      >
        {subtitle && (
          <Typography
            fontSize={20}
            fontWeight='bold'
            color='primary'
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {subtitle}
          </Typography>
        )}
        <Typography
          variant='h4'
          sx={{
            mt: 2,
            mb: { xs: 2, sm: 4 },
            fontSize: { xs: 14, sm: 32 },
            textAlign: 'center'
          }}
          color='common.white'
        >
          {title}
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>{children}</Box>
      </Box>
    </StyledHighlightProductCard>
  )
}

const StyledHighlightProductCard = styled(Box)(({ theme }) => {
  return {
    position: 'relative',
    borderRadius: theme.radius.card,
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
    transition: '200ms all ease-in-out',
    cursor: 'pointer',
    '@media screen and (min-width: 600px)': {
      '&:hover': {
        transform: 'translateY(-4px)',
        '& .image': {
          transform: 'scale(1.05)'
        },
        '& .imageOverlay': {
          opacity: 1,
          transition: 'all ease-in-out 200ms'
        },
        '& .content': {
          opacity: 1,
          transform: 'translateY(0)',
          transition: 'all ease-in-out 200ms'
        }
      }
    },
    '& .overlay': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    },
    '& .image': {
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      transition: '200ms all ease-in-out',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%'
    },
    '& .imageOverlay': {
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
    '& .content': {
      position: 'relative',
      zIndex: 1,
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto'
    }
  }
})
