import React from 'react'
import { Typography as MuiTypography, TypographyProps } from '@mui/material'

export function Typography(props: TypographyProps): JSX.Element {
  const { color = 'textPrimary' } = props

  return <MuiTypography color={color} {...props} />
}
