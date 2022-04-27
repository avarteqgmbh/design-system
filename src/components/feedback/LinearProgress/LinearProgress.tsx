import React from 'react'
import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps
} from '@mui/material'

export function LinearProgress(props: MuiLinearProgressProps): JSX.Element {
  return <MuiLinearProgress {...props} />
}
