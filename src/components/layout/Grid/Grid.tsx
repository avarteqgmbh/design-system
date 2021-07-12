import React from 'react'
import {
  Grid as MuiGrid,
  GridProps as MuiGridProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Grid(props: MuiGridProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiGrid
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
