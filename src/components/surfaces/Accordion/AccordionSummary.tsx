import React from 'react'
import {
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function AccordionSummary(props: AccordionSummaryProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiAccordionSummary
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
