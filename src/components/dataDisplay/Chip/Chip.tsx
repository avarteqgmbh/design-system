import React from 'react'
import {
  Chip as MuiChip,
  ChipProps as MuiChipProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Chip(props: MuiChipProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiChip
      classes={{
        root: classes.root
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
