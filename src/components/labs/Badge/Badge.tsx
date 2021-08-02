import React from 'react'
import { Badge as MuiBadge, BadgeProps, makeStyles } from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Badge(props: BadgeProps): JSX.Element {
  const classes = useStyles()
  const { color = 'primary' } = props
  return (
    <MuiBadge
      classes={{
        root: classes.root
      }}
      {...props}
      color={color}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
