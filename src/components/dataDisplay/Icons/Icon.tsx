import React from 'react'
import { Icon as MuiIcon, IconProps } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import { Theme } from '../../../theme/types'

export function Icon(props: IconProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiIcon
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiIcon>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})

export * as icons from '@mui/icons-material'
