import React from 'react'
import { Divider as MuiDivider, DividerProps } from '@mui/material'
import { Theme } from '../../../theme/types'

export function Divider(props: DividerProps): JSX.Element {
  const { sx } = props

  return <MuiDivider {...props} sx={{ ...styles, ...sx }} />
}

const styles = {
  borderColor: 'background.light',
  '& p': {
    color: 'text.hint',
    fontSize: 12,
    textTransform: 'uppercase'
  },
  '&.MuiDivider-textAlignLeft': {
    '&:before': {
      width: 0
    }
  },
  '&:after, :before': {
    borderTop: (theme: Theme): string => {
      return `thin solid ${theme.palette.background.light}`
    }
  }
}
