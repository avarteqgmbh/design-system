import React from 'react'
import {
  ListItemSecondaryAction as MuiListItemSecondaryAction,
  ListItemSecondaryActionProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function ListItemSecondaryAction(
  props: ListItemSecondaryActionProps
): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiListItemSecondaryAction
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiListItemSecondaryAction>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
