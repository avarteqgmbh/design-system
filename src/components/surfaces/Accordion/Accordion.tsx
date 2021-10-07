import React from 'react'
import { Accordion as MuiAccordion, AccordionProps } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'

export function Accordion(props: AccordionProps): JSX.Element {
  const classes = useStyles()
  return (
    <MuiAccordion
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
