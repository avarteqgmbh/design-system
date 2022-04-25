import React from 'react'
import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps
} from '@mui/material'

export type AutocompleteProps = MuiAutocompleteProps<string, true, true, true>

export function Autocomplete(props: AutocompleteProps): JSX.Element {
  return <MuiAutocomplete {...props} />
}
