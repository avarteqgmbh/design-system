import React from 'react'
import { Divider as MuiDivider, DividerProps } from '@mui/material'
import { Theme } from '../../../theme/types'

export function Divider(props: DividerProps): JSX.Element {
  const { sx } = props

  return <MuiDivider sx={{ ...sx, ...styles }} {...props} />
}

const styles = {
  borderColor: 'background.border',
  '&:after, :before': {
    borderTop: (theme: Theme): string => {
      return `thin solid ${theme.palette.background.border}`
    }
  }
}
