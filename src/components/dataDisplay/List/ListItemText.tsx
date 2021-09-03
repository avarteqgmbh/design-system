import React from 'react'
import {
  ListItemText as MuiListItemText,
  ListItemTextProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function ListItemText(props: ListItemTextProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiListItemText
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
