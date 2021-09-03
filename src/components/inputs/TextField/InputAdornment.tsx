import React from 'react'
import {
  InputAdornment as MuiInputAdornment,
  InputAdornmentProps as MuiInputAdornmentProps,
  makeStyles
} from '@material-ui/core'

export function InputAdornment(props: MuiInputAdornmentProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiInputAdornment
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiInputAdornment>
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {}
  }
})
