import React from 'react'
import {
  IconButton as MuiIconButton,
  IconButtonProps,
  makeStyles
} from '@material-ui/core'

import { Theme } from '../../../theme/types'

export function IconButton(props: IconButtonProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiIconButton
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiIconButton>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
