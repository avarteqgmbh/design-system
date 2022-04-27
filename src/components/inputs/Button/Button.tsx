/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Button as MuiButton, ButtonProps } from '@mui/material'
import { Theme } from '../../../theme/types'

export function Button(props: ButtonProps): JSX.Element {
  const { variant = 'contained', color = 'primary', sx } = props

  return (
    <MuiButton
      // @ts-ignore
      sx={{ ...sx, ...styles }}
      variant={variant}
      color={color}
      {...props}
    />
  )
}

const styles = {
  display: 'flex',
  paddingTop: 3,
  paddingBottom: 3,
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius: (theme: Theme): string => {
    return `${theme.radius.button}px`
  },
  boxShadow: 'none',

  '&.MuiButton-sizeLarge': {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 6,
    paddingRight: 6
  },
  '&.MuiButton-sizeSmall': {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4
  }
}
