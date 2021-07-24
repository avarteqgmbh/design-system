import React from 'react'
import { TabProps, makeStyles, createStyles } from '@material-ui/core'

export function Tab(props: TabProps): JSX.Element {
  const classes = useStyles()
  return <Tab className={classes.root} {...props} />
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
