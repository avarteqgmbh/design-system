import React from 'react'
import { Box, Slide as MuiSlide } from '@mui/material'
import { Link } from '../../navigation/index'

export interface SlideProps {
  src: string
  link?: string
}

export const Slide: React.FC<SlideProps> = (props) => {
  const { src, link, children } = props

  const renderSlide = (): JSX.Element => {
    return (
      <MuiSlide direction='left' in>
        <Box
          sx={{
            backgroundPosition: 'center',
            minWidth: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundImage: `url(${src})`
          }}
        >
          {children && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'rgba(0, 0, 0, .7)',
                width: '100%',
                height: '100%'
              }}
            >
              {children}
            </Box>
          )}
        </Box>
      </MuiSlide>
    )
  }

  if (link !== undefined) {
    return (
      <Link href={link} target='_blank' rel='noreferrer'>
        {renderSlide()}
      </Link>
    )
  }

  return renderSlide()
}
