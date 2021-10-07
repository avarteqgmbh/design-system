import React from 'react'
import { Input as MuiInput, InputProps as MuiInputProps } from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'

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
