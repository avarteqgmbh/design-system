import React from 'react'
import { styled, SxProps } from '@mui/material/styles'
import { Box, Typography } from '../../components'

export interface HeroProps {
  bgImage?: string
  headerSlot?: React.ReactNode
  children?: React.ReactNode
  sx?: SxProps
  title: string
}

export const Hero: React.FC<HeroProps> = (props) => {
  const { bgImage, headerSlot, children, sx, title } = props

  return (
    <StyledHero sx={{ backgroundImage: bgImage && `url(${bgImage})`, ...sx }}>
      {headerSlot}
      <Typography variant='h2' mt={2} mb={4}>
        {title}
      </Typography>
      {children}
    </StyledHero>
  )
}

const StyledHero = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: theme.palette.background.gradient,
    height: 300,
    width: '100%'
  }
})
