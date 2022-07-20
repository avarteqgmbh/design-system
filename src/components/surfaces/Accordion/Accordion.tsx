import React from 'react'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'

export function Accordion(props: AccordionProps): JSX.Element {
  const { sx } = props

  return <MuiAccordion sx={{ ...styles, ...sx }} {...props} />
}

const styles = {
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
