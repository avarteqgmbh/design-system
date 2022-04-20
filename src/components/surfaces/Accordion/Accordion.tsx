import React from 'react'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import makeStyles from '@mui/styles/makeStyles'

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

const useStyles = makeStyles(() => {
  return {
    root: {
      padding: '0 8px 0 16px',
      '& .MuiCollapse-root': {
        padding: '0 16px 0 8px',
        '& .MuiAccordionDetails-root': {
          padding: '4px 0 8px'
        },
        '& .MuiAccordionActions-root': {
          padding: '16px 0'
        }
      }
    }
  }
})
