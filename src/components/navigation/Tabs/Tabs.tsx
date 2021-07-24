import React from 'react'
import {
  Tabs as MuiTabs,
  TabsProps,
  makeStyles,
  createStyles
} from '@material-ui/core'

export function Tabs(props: TabsProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiTabs className={classes.root} {...props}>
      {children}
    </MuiTabs>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
