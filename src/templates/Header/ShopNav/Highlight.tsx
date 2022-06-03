import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Typography } from '../../../components'

export interface HighlightProps {
  title: string
  image: string
  onClick?: () => void
}

export const Highlight: React.FC<HighlightProps> = (props) => {
  const { title, image, onClick } = props

  return (
    <StyledHighlight
      sx={{ boxShadow: 1 }}
      onClick={(): void => {
        return onClick && onClick()
      }}
    >
      <Box className='overlay'>
        <Box className='image' sx={{ backgroundImage: `url(${image})` }} />
        <Box className='imageOverlay' />
      </Box>
      <Box className='content'>
        <Typography
          variant='h6'
          sx={{ textShadow: '0 0 4px #000' }}
          color='common.white'
        >
          {title}
        </Typography>
      </Box>
    </StyledHighlight>
  )
}

const StyledHighlight = styled(Box)(({ theme }) => {
  return {
    flex: 1,
    position: 'relative',
    borderRadius: theme.radius.card,
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
    transition: '200ms all ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      '& .imageOverlay': {
        opacity: 0
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
      opacity: 1,
      transition: '200ms all ease-in-out',
      background: 'rgba(0, 0, 0, 0.3)',
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
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
})
