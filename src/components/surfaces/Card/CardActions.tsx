import React from 'react'
import { CardActions as MuiCardActions, CardActionsProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '../../../theme/types'

export function CardActions(props: CardActionsProps): JSX.Element {
  const classes = useStyles()
  const { children } = props
  return (
    <MuiCardActions
      classes={{
        root: classes.root
      }}
      {...props}
    >
      {children}
    </MuiCardActions>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
