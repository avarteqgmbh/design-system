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

  return <MuiSelect sx={{ ...sx, ...styles }} variant={variant} {...props} />
}

export type { SelectChangeEvent }

const styles = {
  '& .MuiSelect-icon': {
    color: 'text.primary'
  }
}
