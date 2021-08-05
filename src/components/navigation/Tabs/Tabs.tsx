import React from 'react'
import {
  Tabs as MuiTabs,
  TabsProps as MuiTabsProps,
  makeStyles,
  createStyles
} from '@material-ui/core'

export interface TabsProps extends Omit<MuiTabsProps, 'onChange'> {
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void
}

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
