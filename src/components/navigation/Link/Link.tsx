import React from 'react'
import {
  Link as MuiLink,
  LinkProps,
  makeStyles,
  createStyles
} from '@material-ui/core'

export function Link(props: LinkProps): JSX.Element {
  const classes = useStyles()
  return <MuiLink className={classes.root} {...props} />
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  })
})
