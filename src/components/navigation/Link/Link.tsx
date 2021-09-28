import React from 'react'
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

export interface LinkProps extends MuiLinkProps {
  component?: string
}

export function Link(props: LinkProps): JSX.Element {
  const classes = useStyles()
  return <MuiLink className={classes.root} {...props} />
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
