import React from 'react'
import { makeStyles } from '@material-ui/core'
import {
  AvatarGroup as MuiAvatarGroup,
  AvatarGroupProps
} from '@material-ui/lab'
import { Theme } from '../../../theme/types'

export function AvatarGroup(props: AvatarGroupProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiAvatarGroup
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiAvatarGroup>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
