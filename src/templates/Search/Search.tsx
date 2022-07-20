import React from 'react'

import SearchIcon from '@mui/icons-material/Search'
import { Box, InputAdornment, IconButton, TextField } from '../../components'
import { SxProps } from '@mui/material'

export interface SearchProps {
  searchValue?: string
  searchPlaceholder?: string
  onSearchValueChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onSearchButtonClick?: () => void
  sx?: SxProps
}

export const Search: React.FC<SearchProps> = (props) => {
  const {
    searchValue,
    onSearchValueChange,
    searchPlaceholder = 'Suche...',
    onSearchButtonClick,
    sx
  } = props

  return (
    <Box sx={{ minWidth: { xs: '90%', sm: 460 }, ...sx }}>
      <TextField
        fullWidth
        color='secondary'
        value={searchValue}
        placeholder={searchPlaceholder}
        onChange={onSearchValueChange}
        onKeyPress={(event): void => {
          if (event.key === 'Enter' && onSearchButtonClick) {
            onSearchButtonClick()
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                borderRadius='medium'
                size='small'
                onClick={onSearchButtonClick}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Box>
  )
}
