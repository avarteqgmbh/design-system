import React from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { TextField as MuiTextField } from '../TextField/TextField'
import { TextFieldProps, makeStyles } from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function DateTime(props: TextFieldProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiTextField
        classes={{
          root: classes.root
        }}
        {...props}
      />
    </MuiPickersUtilsProvider>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
