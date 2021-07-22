import React from 'react'
import {
  Breadcrumbs as MuiBreadcrumbs,
  BreadcrumbsProps as MuiBreadcrumbsProps,
  makeStyles,
  createStyles
} from '@material-ui/core'

export function Breadcrumbs(props: MuiBreadcrumbsProps): JSX.Element {
  const classes = useStyles()
  const { children } = props

  return (
    <MuiBreadcrumbs {...props} className={classes.root}>
      {children}
    </MuiBreadcrumbs>
  )
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
