import React from 'react'
import {
  InputLabel as MuiInputLabel,
  InputLabelProps as MuiInputLabelProps,
  makeStyles
} from '@material-ui/core'

export function InputLabel(props: MuiInputLabelProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiInputLabel
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiInputLabel>
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {}
  }
})
