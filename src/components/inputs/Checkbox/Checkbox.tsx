import React from 'react'
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Checkbox(props: MuiCheckboxProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiCheckbox
      classes={{
        root: classes.root
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
