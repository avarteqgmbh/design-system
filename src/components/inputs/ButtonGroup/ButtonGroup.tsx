import React from 'react'
import {
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps
} from '@material-ui/core'

export function ButtonGroup(props: ButtonGroupProps): JSX.Element {
  return <MuiButtonGroup {...props} />
}
