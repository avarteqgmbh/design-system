import React from 'react'
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material'

export function Chip(props: MuiChipProps): JSX.Element {
  return (
    <MuiChip
      sx={{
        bgcolor: 'bg.light',
        color: 'text.primary',
        colorPrimary: {
          bgcolor: 'primary.main',
          color: 'common.white'
        },
        colorSecondary: {
          bgcolor: 'bg.light',
          color: 'text.primary'
        },
        disabled: {
          bgcolor: 'bg.light',
          color: 'text.disabled'
        },
        outlined: {
          borderColor: 'bg.border'
        },
        outlinedPrimary: {
          borderColor: 'primary.dark'
        },
        outlinedSecondary: {
          borderColor: 'primary.dark'
        }
      }}
      {...props}
    />
  )
}
