import React from 'react'
import { TabsProps, makeStyles, createStyles } from '@material-ui/core'

export function Tabs(props: TabsProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <Tabs className={classes.root} {...props}>
      {children}
    </Tabs>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
