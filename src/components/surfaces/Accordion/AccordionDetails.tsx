import React from 'react'
import { AccordionDetails as MuiAccordionDetails, AccordionDetailsProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '../../../theme/types'

export function AccordionDetails(props: AccordionDetailsProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiAccordionDetails
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
