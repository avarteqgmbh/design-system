import React from 'react'
import { Grid as MuiGrid, GridProps as MuiGridProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
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
