import React from 'react'
import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps
} from '@mui/material'

export function Switch(props: MuiSwitchProps): JSX.Element {
  return <MuiSwitch {...props} />
}
