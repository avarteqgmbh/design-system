import React from 'react'
import {
  Drawer as MuiDrawer,
  DrawerProps,
  makeStyles,
  createStyles
} from '@material-ui/core'

export function Drawer(props: DrawerProps): JSX.Element {
  const classes = useStyles()
  const { children } = props

  return (
    <MuiDrawer {...props} className={classes.root}>
      {children}
    </MuiDrawer>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
