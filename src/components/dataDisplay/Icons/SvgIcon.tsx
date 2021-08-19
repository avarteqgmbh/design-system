import React from 'react'
import {
  SvgIcon as MuiSvgIcon,
  SvgIconProps,
  makeStyles
} from '@material-ui/core'

import { Theme } from '../../../theme/types'

export function SvgIcon(props: SvgIconProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiSvgIcon
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiSvgIcon>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
