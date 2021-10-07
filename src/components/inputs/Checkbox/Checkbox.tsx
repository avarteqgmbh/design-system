import React from 'react'
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
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
