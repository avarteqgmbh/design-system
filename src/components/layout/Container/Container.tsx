import React from 'react'
import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps
} from '@mui/material'

export function Container(props: MuiContainerProps): JSX.Element {
  const { sx } = props

  return <MuiContainer sx={{ px: 4, ...sx }} {...props} />
}
