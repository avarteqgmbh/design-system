import React from 'react'
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps
} from '@mui/material'

export function CircularProgress(props: MuiCircularProgressProps): JSX.Element {
  return (
    <MuiCircularProgress
      sx={{
        '&.MuiCircularProgress-colorPrimary': {
          color: 'primary.main'
        }
      }}
      {...props}
    />
  )
}
