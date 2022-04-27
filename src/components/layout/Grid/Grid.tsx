import React from 'react'
import {
  Grid as MuiGrid,
  GridProps as MuiGridProps,
  GridDirection
} from '@mui/material'

export function Grid(props: MuiGridProps): JSX.Element {
  return <MuiGrid {...props} />
}

export type { GridDirection }
