import React from 'react'
import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  SelectChangeEvent
} from '@mui/material'

export interface SelectProps extends Omit<MuiSelectProps, 'onChange'> {
  onChange?: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void
}

export function Select(props: SelectProps): JSX.Element {
  const { variant = 'outlined', sx } = props

  return <MuiSelect variant={variant} {...props} sx={{ ...styles, ...sx }} />
}

export type { SelectChangeEvent }

const styles = {
  bgcolor: 'background.input',
  '& .MuiSelect-icon': {
    color: 'text.primary'
  }
}
