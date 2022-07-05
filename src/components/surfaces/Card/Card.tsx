import React from 'react'
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card'
import { styled } from '@mui/material/styles'

export const Card: React.FC<MuiCardProps> = (props) => {
  const { children } = props

  return <StyledMuiCard {...props}>{children}</StyledMuiCard>
}

const StyledMuiCard = styled(MuiCard)(({ theme }) => {
  return {
    borderRadius: theme.radius.card
  }
})
