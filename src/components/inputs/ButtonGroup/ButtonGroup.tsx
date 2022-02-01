import React from 'react'
import { ButtonGroup as MuiButtonGroup, ButtonGroupProps } from '@mui/material'

export function ButtonGroup(props: ButtonGroupProps): JSX.Element {
  const { sx } = props

  return (
    <MuiButtonGroup
      {...props}
      sx={{
        '& .MuiButton-root.MuiButton-contained': {
          borderColor: 'transparent'
        },
        '& .MuiButton-root.MuiButton-text': {
          borderColor: 'transparent'
        },
        borderRadius: '8px',
        '& .MuiButton-root.MuiButton-outlinedPrimary': {
          borderColor: 'primary.main'
        },
        '& .MuiButton-root.MuiButton-containedSecondary': {
          borderColor: 'bg.border'
        },
        ...sx
      }}
    />
  )
}
