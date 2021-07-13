import React from 'react'
import {
  Fab as MuiFab,
  FabProps as MuiFabProps,
  makeStyles
} from '@material-ui/core'

import { Theme } from '../../../theme/types'

export function FloatingActionButton(props: MuiFabProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiFab
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiFab>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
