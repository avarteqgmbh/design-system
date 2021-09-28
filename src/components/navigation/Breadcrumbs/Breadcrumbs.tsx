import React from 'react'
import { Breadcrumbs as MuiBreadcrumbs, BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

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
