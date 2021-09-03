import React from 'react'
import {
  ListItemAvatar as MuiListItemAvatar,
  ListItemAvatarProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function ListItemAvatar(props: ListItemAvatarProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiListItemAvatar
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiListItemAvatar>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
