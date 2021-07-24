import React from 'react'
import {
  Tab as MuiTab,
  TabProps,
  makeStyles,
  createStyles
} from '@material-ui/core'

export function Tab(props: TabProps): JSX.Element {
  const classes = useStyles()
  return <MuiTab className={classes.root} {...props} />
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
