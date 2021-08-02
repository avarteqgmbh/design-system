import React from 'react'
import { Avatar as MuiAvatar, AvatarProps, makeStyles } from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Avatar(props: AvatarProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiAvatar
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
