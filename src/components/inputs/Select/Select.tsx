import React from 'react'
import { Select as MuiSelect, SelectProps } from '@material-ui/core'

export function Select(props: SelectProps): JSX.Element {
  return <MuiSelect {...props} />
}
