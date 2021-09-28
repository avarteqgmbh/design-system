import React from 'react'
import {
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
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
