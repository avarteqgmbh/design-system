import React from 'react'
import {
  CardActions as MuiCardActions,
  CardActionsProps,
  makeStyles
} from '@material-ui/core'
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
