import React from 'react'
import { AccordionActions as MuiAccordionActions, AccordionActionsProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
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
