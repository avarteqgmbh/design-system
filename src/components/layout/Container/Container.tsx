import React from 'react'
import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps
} from '@mui/material'

export function Container(props: MuiContainerProps): JSX.Element {
  return <MuiContainer sx={{ p: { xs: 4, sm: 3 } }} {...props} />
}
