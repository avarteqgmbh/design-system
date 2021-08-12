import React from 'react'
import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Switch(props: MuiSwitchProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiSwitch
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
