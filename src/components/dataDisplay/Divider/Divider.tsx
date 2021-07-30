import React from 'react'
import {
  Divider as MuiDivider,
  DividerProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Divider(props: DividerProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiDivider
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
