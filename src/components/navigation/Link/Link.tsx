import React from 'react'
import { Link as MuiLink, LinkProps } from '@material-ui/core'

export function Link(props: LinkProps): JSX.Element {
  return <MuiLink {...props} />
}
