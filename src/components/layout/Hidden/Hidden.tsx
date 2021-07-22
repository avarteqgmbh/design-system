import React from 'react'
import {
  Hidden as MuiHidden,
  HiddenProps as MuiHiddenProps
} from '@material-ui/core'

export function Hidden(props: MuiHiddenProps): JSX.Element {
  return <MuiHidden {...props} />
}
