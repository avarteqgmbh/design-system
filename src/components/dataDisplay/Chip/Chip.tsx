import React from 'react'
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material'

export function Chip(props: MuiChipProps): JSX.Element {
  return <MuiChip {...props} />
}
