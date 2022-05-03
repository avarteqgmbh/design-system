/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Button as MuiButton, ButtonProps } from '@mui/material'
import { Theme } from '../../../theme/types'

export function Button(props: ButtonProps): JSX.Element {
  const { variant = 'contained', color = 'primary', sx } = props

  return (
    <MuiButton
      {...props}
      variant={variant}
      color={color}
      // @ts-ignore
      sx={{ ...styles, ...sx }}
    />
  )
}

const styles = {
  display: 'flex',
  py: 3,
  px: 5,
  borderRadius: (theme: Theme): string => {
    return `${theme.radius.button}px`
  },
  boxShadow: 'none',

  '&.MuiButton-sizeLarge': {
    py: 4,
    px: 6
  },
  '&.MuiButton-sizeSmall': {
    py: 2,
    px: 4
  }
}
