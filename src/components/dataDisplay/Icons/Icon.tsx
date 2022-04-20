import React from 'react'
import { Icon as MuiIcon, IconProps } from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Icon(props: IconProps): JSX.Element {
  const { children } = props
  const classes = useStyles()

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

const useStyles = makeStyles<Theme>((theme: Theme) => {
  return {
    root: {
      color: theme.palette.text.primary
    }
  }
})
