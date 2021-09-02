import React from 'react'
import {
  ListItem as MuiListItem,
  ListItemProps as MuiListItemProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export interface ListItemProps extends Omit<MuiListItemProps, 'button'> {
  button?: boolean | undefined
}

export function ListItem(props: ListItemProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiListItem
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiListItem>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
