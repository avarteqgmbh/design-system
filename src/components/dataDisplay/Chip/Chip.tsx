import React from 'react'
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material'

export interface ChipProps extends MuiChipProps {
  rounded?: boolean
}

export function Chip(props: ChipProps): JSX.Element {
  const { sx, rounded = true } = props
  const styles = {
    borderRadius: rounded ? '100px' : '8px'
  }

  return <MuiChip {...props} sx={{ ...sx, ...styles }} />
}
