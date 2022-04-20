import React from 'react'
import MuiCardActions, { CardActionsProps } from '@mui/material/CardActions'

export function CardActions(props: CardActionsProps): JSX.Element {
  const { children } = props
  return (
    <MuiCardActions sx={{ padding: '4px 16px 16px 16px' }} {...props}>
      {children}
    </MuiCardActions>
  )
}
