import React from 'react'
import {
  AccordionDetails as MuiAccordionDetails,
  AccordionDetailsProps,
  makeStyles
} from '@material-ui/core'
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
