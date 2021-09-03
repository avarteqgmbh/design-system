import React from 'react'
import {
  Input as MuiInput,
  InputProps as MuiInputProps,
  makeStyles
} from '@material-ui/core'

export function Input(props: MuiInputProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiInput
      classes={{
        root: classes.root
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {}
  }
})
