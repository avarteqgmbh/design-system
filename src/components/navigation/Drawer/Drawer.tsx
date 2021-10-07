import React from 'react'
import { Drawer as MuiDrawer, DrawerProps } from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'

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
