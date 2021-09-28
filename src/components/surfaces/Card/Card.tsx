import React from 'react'
import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '../../../theme/types'

export function Card(props: MuiCardProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiCard
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiCard>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
