import React from 'react'
import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps
} from '@mui/material'

export type AutocompleteProps = MuiAutocompleteProps<unknown, true, true, true>

export function Autocomplete(props: AutocompleteProps): JSX.Element {
  const { sx } = props

  return <MuiAutocomplete {...props} sx={{ ...styles, ...sx }} />
}

const styles = {
  '& .MuiButtonBase-root.MuiIconButton-root': {
    color: 'text.primary'
  }
}
