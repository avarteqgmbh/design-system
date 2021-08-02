import React from 'react'
import {
  AccordionActions as MuiAccordionActions,
  AccordionActionsProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function AccordionActions(props: AccordionActionsProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiAccordionActions
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
