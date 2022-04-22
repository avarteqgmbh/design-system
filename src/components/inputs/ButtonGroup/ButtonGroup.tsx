import React from 'react'
import { ButtonGroup as MuiButtonGroup, ButtonGroupProps } from '@mui/material'
import { Theme } from '../../../theme/types'

export function ButtonGroup(props: ButtonGroupProps): JSX.Element {
  const { sx } = props

  return (
    <MuiButtonGroup
      sx={{
        ...sx,
        ...styles
      }}
      {...props}
    />
  )
}

const styles = {
  borderRadius: (theme: Theme): string => {
    return `${theme.radius.button}px`
  }
}
