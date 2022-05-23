/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Theme } from '../../../theme/types'
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card'

const Card: React.FC<MuiCardProps> = (props) => {
  const { children, sx } = props

  return (
    <MuiCard
      {...props}
      // @ts-ignore
      sx={{ ...sx, ...styles }}
    >
      {children}
    </MuiCard>
  )
}

const styles = {
  borderRadius: (theme: Theme): string => {
    return `${theme.radius.card}px`
  }
}

export default Card
