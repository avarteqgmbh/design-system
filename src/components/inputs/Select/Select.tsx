import React from 'react'
import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Select(props: MuiSelectProps): JSX.Element {
  const classes = useStyles()
  const { variant = 'outlined' } = props
  return (
    <MuiSelect
      classes={{
        root: classes.root
      }}
      variant={variant}
      {...props}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
